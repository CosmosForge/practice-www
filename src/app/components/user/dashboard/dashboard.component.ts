import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RequestsService } from '../../../services/requests.service';
import {environment} from "../../../../config"
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  name = "Aleksei"
  lastName = "Kozlov"
  count = 0
  views = 0
  popularsEstates:any[] = []
  constructor(private request:RequestsService){}
  ngOnInit(){
    this.request.sendGetRequest(environment.apiUrl+"/real-estate/user-populars").subscribe(data=>{
      console.log(data)
    })
  }
  
}
