import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service"
import { RequestsService } from './requests.service';
import {environment} from "../../config"

interface userData{
  readonly user:string
  readonly password:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly cookie: CookieService,
    private router:Router) { }

  isAuth(){
    const accessToken =  this.cookie.check("access-token")
    const refreshToken =  this.cookie.check("refresh-token")
    return !!accessToken && !!refreshToken ;
  }
  logOut(){
    this.cookie.delete("token")
    this.router.navigate(["/"])
  }
}
