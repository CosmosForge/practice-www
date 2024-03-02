import { Component } from '@angular/core';
import { SearchDataService } from '../../services/search-data.service';
import { CommonModule } from '@angular/common';
import { SearchBlockComponent } from '../search-block/search-block.component';

@Component({
  selector: 'app-classic-search',
  standalone: true,
  imports: [CommonModule, SearchBlockComponent],
  templateUrl: './classic-search.component.html',
  styleUrl: './classic-search.component.scss'
})
export class ClassicSearchComponent {
  showAds = []
  constructor(private search:SearchDataService){}
  ngOnInit(){
    
  }
}
