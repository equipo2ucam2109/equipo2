import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, SelectMultipleControlValueAccessor } from  '@angular/forms';
import {Imagen} from '../../model/model';
import {MainComponent}from 'src/app/components/main/main.component'

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  constructor(private rest: AdminService, private router: Router, private formBuilder: FormBuilder) { }


  ngOnInit() {
    //esto es lo que no nos funciona
    //console.log(item);


  }



}
