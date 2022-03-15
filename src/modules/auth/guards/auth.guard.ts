import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(): Observable<boolean> {
       let ss = sessionStorage.getItem("Auth");
        if(ss === 'true'){
            return of(true);
        }else{
            return of(false);
        }
    }
}
