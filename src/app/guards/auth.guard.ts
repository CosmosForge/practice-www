import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {CookieService} from "ngx-cookie-service"
import { Inject, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const token = inject(AuthService).isAuth()
  if(!!token){
    return true;
  }else{
    return false
  }
};
