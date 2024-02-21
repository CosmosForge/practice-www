import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleHeaderService } from '../services/toggle-header.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  colorType = true
  constructor(private colorShema:ToggleHeaderService){
    this.colorShema.changeHeaderSchema$.subscribe((value)=>{
      this.colorType = value
    })
  }
}
