import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup } from  '@angular/forms';
import {Imagen} from '../../model/model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  API_URI = 'https://gameserver.centic.ovh';

  public nombre: string;
  public descripcion: string;
  public imagenURL: string;

  public add:boolean = false;
  public delete: boolean = false;

  items: any = [];

  form: FormGroup;
 
  constructor(private rest: AdminService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.getItems();
    this.form = this.formBuilder.group({
      imagen: ['']
    });
  }

  onFileChange(event){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('imagen').setValue(file);
      this.addImagen();
      
    }
  }

  addImagen(){

    const formData = new FormData();
    formData.append('file', this.form.get('imagen').value);

    this.rest.postImagen(formData).subscribe(
      res => {
       var body = res['body'];
        console.log(res['body']);
        for (var key in body){
          if (key == 'file'){
            console.log(key + body[key]);
            this.imagenURL = body[key];
            console.log(this.imagenURL);
          }
        }
        
      } ,
      err => console.log(err)
    );

    
    }

  addItem(){

    let item: Imagen = {
      _id: '',
      nombre: this.nombre,
      descripcion: this.descripcion,
      imagenURL: this.imagenURL
    };

    this.rest.postItems(item).subscribe(
      res => {
        console.log(res);
        this.getItems();
        this.add = true;
        
      },
      err => console.error(err)
    );
  }
   

  getItems(){
    this.rest.getItems().subscribe(
      res => {
        console.log(res);
        this.items = res;
      },
      err => console.error(err)
    );
  }

  deleteItem(id){
    this.rest.delItems(id).subscribe(
      res => {
        console.log('Eliminado ' + res);
        this.getItems();
        this.delete == true;
      },
      err => console.log(err)
    );
  }

  getImagen(url){

    this.rest.getImagen(url).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
  }


}
