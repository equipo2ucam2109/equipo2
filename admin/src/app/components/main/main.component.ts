import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {Router} from '@angular/router';

import {Imagen} from '../../model/model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  API_URI = 'https://gameserver.centic.ovh';

  public id: string;
  public nombre: string;
  public descripcion: string;
  public imagenURL: string;
  public file: File;
  public displayURL: string;

  selectedFile: File = null;

 /* item:Imagen = {
    id: '',
    nombre: '',
    descripcion: '',
    imagenURL: ''
  };
*/
  items: any = [];

  constructor(private rest: AdminService, private router: Router) { }

  ngOnInit() {

    this.getItems();
  }

 /* addImagen(event){
    this.file = <File> event.target.files[0];
    this.ng2ImgToolsService.resize([this.file],500,500).subscribe(img =>{
      const imagen = new FormData();
      imagen.append('file',img,this.file.name);

      this.rest.postImagen(imagen).subscribe(
        res =>{
          this.imagenURL = res['file'];
          this.displayURL = this.API_URI + this.imagenURL;
        },
        err => {
          console.log('Error' + err);
        }
      );
    },
    err => {
      console.log('Error '  + err);
    }
      );
  }*/

  onFileSelected(event){
    this.selectedFile =  event.target.files[0];;
  }
  addImagen(){
   const fd = new FormData();
   fd.append('file', this.selectedFile, this.selectedFile.name);
   this.rest.postImagen(fd).subscribe(
     res =>{
       console.log('resultado ' + res);
       this.imagenURL = res['file'];
       this.displayURL = this.API_URI + this.imagenURL;
     },
     err =>{
       console.log(err);
     }
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


}
