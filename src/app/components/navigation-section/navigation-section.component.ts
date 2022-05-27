import { Component, Input, OnInit } from '@angular/core';
import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-section',
  templateUrl: './navigation-section.component.html',
  styleUrls: ['./navigation-section.component.css']
})
export class NavigationSectionComponent implements OnInit {

  @Input() symbol: IconDefinition
  
  constructor() {
    this.symbol = faArrowLeft
  }

  ngOnInit(): void {
  }

}
