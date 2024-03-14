import { CanActivateFn, Router } from '@angular/router';
import {CookieService} from "ngx-cookie-service"
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const accessToken = inject(CookieService).check("access-token");
  const refreshToken = inject(CookieService).check("refresh-token");
  if(accessToken && refreshToken){
    return true;
  }else{
    router.navigate([""])
    return false
  }
};
