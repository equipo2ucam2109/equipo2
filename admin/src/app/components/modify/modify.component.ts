import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { FormBuilder, FormGroup, SelectMultipleControlValueAccessor } from  '@angular/forms';
import {Imagen} from '../../model/model';
import {MainComponent}from 'src/app/components/main/main.component'
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  constructor(private rest: AdminService, private router: Router, private formBuilder: FormBuilder, private _route: ActivatedRoute) { }

  public nombre: string;
  public descripcion: string;
  result;

  ngOnInit() {
    
    let id = this._route.snapshot.paramMap.get('id');
    console.log(id);
    this.getItemId(id);
    
   
  }
  

  getItemId(ide){

    this.rest.getItem(ide).subscribe( res => {
      console.log(res);
      
      this.result = res;
      
    },
    err => console.error(err))

  }

  updateItem(){
    let item: Imagen = {
      _id: this.result.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      imagenURL: this.result.imagenURL
    };


    
    this.rest.updateItem(this.result.id, item).subscribe( res => {
      console.log(res);
    },
    err => console.error(err))
  }



}
