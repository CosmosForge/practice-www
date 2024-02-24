import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataListService } from '../../services/data-list.service';


@Component({
  selector: 'app-search-block',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search-block.component.html',
  styleUrl: './search-block.component.scss'
})
export class SearchBlockComponent {
  constructor(public dataList:DataListService){}
  formType = "classic"
  list1 = ""
  list2:string[] = []
  list3 = ""
  handleClick(list:number, type:string){
    if(list == 1){
      if(this.list1 == type){
        this.list1 = ""
      }else{
        this.list1 = type
      }
    }else if(list == 2){
      if(this.list2.includes(type)){
        const indexToRemove = this.list2.indexOf(type);
        this.list2.splice(indexToRemove, 1)
      }else{
        this.list2.push(type)
      }
    }else if(list == 3){
      if(this.list3 == type){
        this.list3 = ""
      }else{
        this.list3 = type
      }
    }
  }
  getBuildingsByTypes(event: Event){
    event.preventDefault();
  }
  changeSearchForms(type:string){
    this.formType = type
  }
}
