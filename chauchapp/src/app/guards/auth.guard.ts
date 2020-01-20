import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private Afauth: AngularFireAuth, private router: Router) {  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // tslint:disable-next-line: no-shadowed-variable
    return this.Afauth.authState.pipe(map( auth => {
      if (isNullOrUndefined(auth)) {
        this.router.navigate(['/login']);
        return false;
      } else {
return true;
      }
      // console.log(auth);
      // return false;
    }));
  }
}
