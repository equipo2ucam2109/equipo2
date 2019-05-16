import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import {ImageCropperModule} from 'ngx-image-cropper';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ImageCropperModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
