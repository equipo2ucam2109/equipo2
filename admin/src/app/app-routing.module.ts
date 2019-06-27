import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainComponent} from './components/main/main.component';
import {AddImageComponent}from './components/add-image/add-image.component';
import {CanActivateViaAuthGuard} from './canactivate';
import {ModifyComponent}from './components/modify/modify.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate:[CanActivateViaAuthGuard]
  },
  {
    path:'',
    redirectTo: 'main',
    pathMatch: 'full'

  },
  {
    path:'add',
   component: AddImageComponent,
   canActivate:[CanActivateViaAuthGuard]
  },
  {
    path:'modify',
   component: ModifyComponent,
   canActivate:[CanActivateViaAuthGuard]
  },
  {
    path:'modify/:id',
   component: ModifyComponent,
   canActivate:[CanActivateViaAuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
