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
    private router:Router,
    private readonly req:RequestsService) { }
  login(userData:userData){
    this.req.sendPostRequest(`${environment.apiUrl}/user/login`, userData)
  }
  isAuth(){
    const token =  this.cookie.check("token")
    return !!token;
  }
  logOut(){
    this.cookie.delete("token")
    this.router.navigate(["/"])
  }
}
