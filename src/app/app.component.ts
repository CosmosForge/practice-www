import { Component, ElementRef, HostListener, Renderer2, ViewChild, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollListService } from './services/scroll-list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  scrollDelta = 100
  scrollStatus = false
  element = 0
  elements:ElementRef[] = []
  @ViewChild("section", { read: ElementRef }) footer: ElementRef | undefined;
  constructor(private scrollList:ScrollListService, private renderer: Renderer2){
    afterNextRender (() => {
      if(sessionStorage.getItem("element") != undefined && sessionStorage.getItem("element") != null){
        this.element = parseInt(sessionStorage.getItem("element") || "0")
      }else{
        sessionStorage.setItem("element", "0")
      }
    });
  }
  ngOnInit() {
    const subscription = this.scrollList.childElementRef$.subscribe((childElementRef) => {
      this.elements.push(childElementRef[0])
      if(childElementRef[1] == 0 && this.footer != undefined){
        this.elements.push(this.footer)
      }
    });
  }
  @HostListener('wheel', ['$event'])
  setScrollDelta(event: WheelEvent){
    this.scrollDelta = event["deltaY"]
    if(this.elements.length > 1){
      this.scrollStatus = true
    }else{
      this.scrollStatus = false
    }
  }
  @HostListener('document:scrollend', ['$event'])
  onMouseWheel(event: any) {
    if(this.scrollStatus){
      this.scrollStatus = false
      if(this.scrollDelta < 0){
        if (this.element != 0){
          this.element--;
        }
      }else{
        if(this.elements != undefined && this.element < this.elements?.length-1){
          this.element++;
        }
      }
      if(this.elements != undefined){
        const elementRef: ElementRef | undefined = this.elements[this.element];
        if (elementRef) {
          const nativeElement: HTMLElement = elementRef.nativeElement;
          nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          sessionStorage.setItem("element", String(this.element))
        }
      }
    }
  }
}
