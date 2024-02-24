import { ElementRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollListService {
  private childElementRefSubject = new Subject<[ElementRef, number]>();
  childElementRef$ = this.childElementRefSubject.asObservable();
  setChildElementRef(childElementRef: ElementRef, remainder:number) {
    this.childElementRefSubject.next([childElementRef, remainder]);
  }
}
