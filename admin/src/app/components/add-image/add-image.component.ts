import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, SelectMultipleControlValueAccessor } from  '@angular/forms';
import {Imagen} from '../../model/model';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

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
  item: any = [];

  form: FormGroup;
 
  constructor(private rest: AdminService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.getItems();
    this.form = this.formBuilder.group({
      imagen: ['']
    });
  }

  addImagen(){

    const formData = new FormData();
    formData.append('file', this.croppedImageFile);
  
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
   
  getItems(){
    this.rest.getItems().subscribe(
      res => {
        console.log(res);
        this.items = res;
      },
      err => console.error(err)
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

  
//funciones cropper
fileChangeEvent(event: any): void {
  this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
  this.croppedImage = event.base64;
  this.croppedImageFile=event.file;
  console.log('Image cropped', event);
  this.addImagen();
  }
  imageLoaded() {
  this.showCropper = true;
  console.log('Image loaded');
  }
  cropperReady() {
  console.log('Cropper ready');
  }
  loadImageFailed() {
  // show message
  }

}