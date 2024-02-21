import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleHeaderService {
  private colorSchemaSource = true
  private colorSchemaSub = new Subject<boolean>();
  changeHeaderSchema$ = this.colorSchemaSub.asObservable();

  changeColor(type:boolean){
    if(type != this.colorSchemaSource){
      this.colorSchemaSub.next(type);
    }
  }
}
