import { Injectable } from '@angular/core';
interface classicSearch{
  type:string
  additions:string[]
  place:string
}
@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  private classicSearch:classicSearch = {
    type:"",
    additions:[],
    place:""
  }
  constructor() { }
  getClassicSearch(){
    return this.classicSearch
  }
  setClassicSearch(search:classicSearch){
    this.classicSearch = search
  }
}
