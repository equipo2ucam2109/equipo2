import { Injectable } from '@angular/core';
import { CanActivate , Router} from '@angular/router';
import { AdminService } from './services/admin.service';

@Injectable()
export class CanActivateViaAuthGuard  implements CanActivate {

  constructor(private rest: AdminService, private router: Router) {}

  canActivate() {
    if (!this.rest.isLogged()) {
        console.log('No estás logueado');
        this.router.navigate(['/login']);
        return false;
    }

    return true;
  }
}