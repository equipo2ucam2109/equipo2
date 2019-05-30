import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, SelectMultipleControlValueAccessor } from  '@angular/forms';
import {Imagen} from '../../model/model';
import { ImageCroppedEvent } from 'ngx-image-cropper';


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
  //cropper img
  imageChangedEvent: any = '';
  croppedImage: any = '';
  croppedImageFile: any = '';
  showCropper = false;
  //end cropper

  items: any = [];


  form: FormGroup;
 
  constructor(private rest: AdminService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.getItems();
    this.form = this.formBuilder.group({
      imagen: ['']
    });
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

  getItem(id){
    this.rest.getItem(id).subscribe(
      res => {
        console.log(res);
        this.item = res;
      },
      err => console.error(err)
    );
    console.log(id);
  }

}
