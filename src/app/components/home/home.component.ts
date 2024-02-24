import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, ViewChildren, afterNextRender } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBlockComponent } from '../search-block/search-block.component';
import { ScrollListService } from '../../services/scroll-list.service';
import { formatDistanceToNow } from 'date-fns';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  buyAds = [
    {
      img: "https://www.realista.com/wp-content/uploads/2023/06/Luxury-Real-Estate-in-Spain-The-Best-Places-to-Invest-V1.jpg",
      price: 121000,
      title: "Luxury real estate in Spain",
      square: 200,
      rooms: 10,
      updatedAt: new Date(2024, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://www.realista.com/wp-content/uploads/2023/06/Luxury-Real-Estate-in-Spain-The-Best-Places-to-Invest-V1.jpg",
      price: 121000,
      title: "Luxury real estate in Spain",
      square: 200,
      rooms: 10,
      updatedAt: new Date(2024, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://www.realista.com/wp-content/uploads/2023/06/Luxury-Real-Estate-in-Spain-The-Best-Places-to-Invest-V1.jpg",
      price: 121000,
      title: "Luxury real estate in Spain",
      square: 200,
      rooms: 10,
      updatedAt: new Date(2024, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://www.realista.com/wp-content/uploads/2023/06/Luxury-Real-Estate-in-Spain-The-Best-Places-to-Invest-V1.jpg",
      price: 121000,
      title: "Luxury real estate in Spain",
      square: 200,
      rooms: 10,
      updatedAt: new Date(2024, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://www.realista.com/wp-content/uploads/2023/06/Luxury-Real-Estate-in-Spain-The-Best-Places-to-Invest-V1.jpg",
      price: 121000,
      title: "Luxury real estate in Spain",
      square: 200,
      rooms: 10,
      updatedAt: new Date(2024, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://www.realista.com/wp-content/uploads/2023/06/Luxury-Real-Estate-in-Spain-The-Best-Places-to-Invest-V1.jpg",
      price: 121000,
      title: "Luxury real estate in Spain",
      square: 200,
      rooms: 21,
      updatedAt: new Date(2024, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
  ]
  rentAds = [
    {
      img: "https://spainestate.com/media/images/news/o_1dd5nrfj73d71l7d7kd1c381dsmc.jpg",
      price: 540000,
      title: "Luxury real estate in Spain with pool",
      square: 350,
      rooms: 15,
      updatedAt: new Date(2022, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://spainestate.com/media/images/news/o_1dd5nrfj73d71l7d7kd1c381dsmc.jpg",
      price: 540000,
      title: "Luxury real estate in Spain with pool",
      square: 350,
      rooms: 15,
      updatedAt: new Date(2022, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://spainestate.com/media/images/news/o_1dd5nrfj73d71l7d7kd1c381dsmc.jpg",
      price: 540000,
      title: "Luxury real estate in Spain with pool",
      square: 350,
      rooms: 15,
      updatedAt: new Date(2022, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://spainestate.com/media/images/news/o_1dd5nrfj73d71l7d7kd1c381dsmc.jpg",
      price: 540000,
      title: "Luxury real estate in Spain with pool",
      square: 350,
      rooms: 15,
      updatedAt: new Date(2022, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://spainestate.com/media/images/news/o_1dd5nrfj73d71l7d7kd1c381dsmc.jpg",
      price: 540000,
      title: "Luxury real estate in Spain with pool",
      square: 350,
      rooms: 15,
      updatedAt: new Date(2022, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://spainestate.com/media/images/news/o_1dd5nrfj73d71l7d7kd1c381dsmc.jpg",
      price: 540000,
      title: "Luxury real estate in Spain with pool",
      square: 350,
      rooms: 15,
      updatedAt: new Date(2022, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    
  ]
  newAds = [
    {
      img: "https://www.spainforsale.properties/wp-content/uploads/2020/04/37826221_10160888640585105_671310646859530240_n.jpg",
      price: 1205000,
      title: "Luxury Real Estate in Marbella, Spain",
      square: 421,
      rooms: 22,
      updatedAt: new Date(2017, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://www.spainforsale.properties/wp-content/uploads/2020/04/37826221_10160888640585105_671310646859530240_n.jpg",
      price: 1205000,
      title: "Luxury Real Estate in Marbella, Spain",
      square: 421,
      rooms: 22,
      updatedAt: new Date(2017, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://www.spainforsale.properties/wp-content/uploads/2020/04/37826221_10160888640585105_671310646859530240_n.jpg",
      price: 1205000,
      title: "Luxury Real Estate in Marbella, Spain",
      square: 421,
      rooms: 22,
      updatedAt: new Date(2017, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://www.spainforsale.properties/wp-content/uploads/2020/04/37826221_10160888640585105_671310646859530240_n.jpg",
      price: 1205000,
      title: "Luxury Real Estate in Marbella, Spain",
      square: 421,
      rooms: 22,
      updatedAt: new Date(2017, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://www.spainforsale.properties/wp-content/uploads/2020/04/37826221_10160888640585105_671310646859530240_n.jpg",
      price: 1205000,
      title: "Luxury Real Estate in Marbella, Spain",
      square: 421,
      rooms: 22,
      updatedAt: new Date(2017, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
    {
      img: "https://www.spainforsale.properties/wp-content/uploads/2020/04/37826221_10160888640585105_671310646859530240_n.jpg",
      price: 1205000,
      title: "Luxury Real Estate in Marbella, Spain",
      square: 421,
      rooms: 22,
      updatedAt: new Date(2017, 1, 24, 0, 23, 42, 11),
      updateTime: ""
    },
  ]
  category = "buy"
  showAds = this.buyAds
  changes = false
  toggleTimeMS = 500
  @ViewChildren("section", { read: ElementRef }) children: QueryList<ElementRef> | undefined;
  constructor(scrollList:ScrollListService, ){
    afterNextRender (() => {
      this.children?.forEach((value, index, array) => {
        if(this.children != undefined){
          scrollList.setChildElementRef(value, (this.children?.length-1-index));
        }
      })
    });
  }
  ngOnInit(){
    for(const i of this.showAds){
      i.updateTime = formatDistanceToNow(i.updatedAt, { addSuffix: true });
    }
  }
  changeCategory(category:string){
    if(!this.changes){
      this.category = category
      this.changes = true
      setTimeout(() => {
        switch (category) {
          case "buy":
            this.showAds = this.buyAds
            break;
          case "rent":
            this.showAds = this.rentAds
            break;
          case "new":
            this.showAds = this.newAds
            break;
        }
        for(const i of this.showAds){
          i.updateTime = formatDistanceToNow(i.updatedAt, { addSuffix: true });
        }
        setTimeout(() => {
          this.changes = false
        }, this.toggleTimeMS*0.1);
      }, this.toggleTimeMS*0.9);
    }
  }
}
