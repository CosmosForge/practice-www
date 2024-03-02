import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleHeaderService } from '../services/toggle-header.service';
import { RouterModule } from '@angular/router';
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
  constructor(private colorShema:ToggleHeaderService, private readonly auth:AuthService){
    this.colorShema.changeHeaderSchema$.subscribe((value)=>{
      this.colorType = value
    })
  }
  authStatus = this.auth.isAuth()
}
