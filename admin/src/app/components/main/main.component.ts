import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, SelectMultipleControlValueAccessor } from  '@angular/forms';
import {Imagen} from '../../model/model';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ToastrService } from 'ngx-toastr';


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
  item: any = [];

  form: FormGroup;
  
  showAlert=false;
  obraAv;

  constructor(private rest: AdminService, private router: Router, private formBuilder: FormBuilder,private toastr: ToastrService) { 
    
  }

  ngOnInit() {

    this.rest.getToken();
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
    this.rest.delItem(id).subscribe(
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


  copyMessage(val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.showToaster(val + " Copiado al portapeles");
  }
//mensaje de confirmaciones
  showToaster(msg){
    this.toastr.success(msg)
}

clickMethod(itemId) {
  if(confirm("Are you sure to delete "+itemId)) {
    this.deleteItem(itemId)
    this.showToaster(itemId + " Se ha borrado correctamente");
  }
}
//(click)="deleteItem(i._id)"

}
