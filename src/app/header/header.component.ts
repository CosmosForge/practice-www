import { CommonModule } from '@angular/common';
import { Component, ViewChild, } from '@angular/core';
import { ToggleHeaderService } from '../services/toggle-header.service';
import { Router, RouterModule } from '@angular/router';
import { regLogComponent } from '../components/user/regLog/regLog.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, regLogComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  colorType = true
  authStatus = false
  showForms = false
  changes = false
  toggleMenuStatus = false
  @ViewChild(regLogComponent) childComponent!: regLogComponent;
  constructor(private colorShema:ToggleHeaderService, private readonly auth:AuthService, private router: Router){
    this.colorShema.changeHeaderSchema$.subscribe((value)=>{
      this.colorType = value
    })
    router.events.subscribe(data=>{
      this.authStatus = this.auth.isAuth()
      if(router.url.split("/")[1] == "user"){
        this.colorType = false
      }
    })
  }
  authFlag(status:boolean){
    this.authStatus = status
  }
  showForm(type:string){
    if(!this.changes){
      this.childComponent.showform = type
      this.showForms = true
      this.changes = true
      setTimeout(() => {
        this.changes = false
      }, 500);
    }
  }
  hideForms(){
    this.showForms = false
  }
  toggleMenu(){
    this.toggleMenuStatus = ! this.toggleMenuStatus
  }
}
