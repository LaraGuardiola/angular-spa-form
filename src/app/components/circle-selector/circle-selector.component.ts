import { Component, OnInit, Input, ElementRef, ViewChildren, AfterViewInit } from '@angular/core';
import { ClickEffectService } from './click-effect.service';
import { generalStyle } from './general-style-interface';


@Component({
  selector: 'app-circle-selector',
  templateUrl: './circle-selector.component.html',
  styleUrls: ['./circle-selector.component.css']
})
export class CircleSelectorComponent implements OnInit, AfterViewInit  {

  //Changes the title of the circle selector
  @Input() title: string;

  //Modifies the list of items you want to display
  @Input() numberList: (string | number)[] = []

  //Sets up default clicked value background color, and color
  @Input() defaultValue: number | string

  //sets up the style of the default and clicked circle
  @Input() highlightedBackground: string
  @Input() highlightedColor: string
  @Input() defaultBackground: string
  @Input() defaultColor: string

  //Sets up the style of the circle selector component (title and circles)
  @Input() titleStyle: generalStyle = {}
  @Input() circleStyle: generalStyle = {}

  constructor(private clickService: ClickEffectService) {
    this.title = 'defaultTitle'
    this.numberList = [1, 2, 3, 4, '5+']
    this.defaultValue = 2
    this.titleStyle = {
      fontFamily: 'Arial',
      fontSize: '1.25em',
      color: 'black'
    },
    this.circleStyle = {
      backgroundColor: '#f0f1f8',
      color: '#94979b',
      fontFamily: 'Arial',
      width: '60px',
      height: `60px`,
      fontSize: '30px',
      margin: '0.20em'
    }
    this.highlightedBackground = '#18acb5',
    this.highlightedColor = '#ffffff',
    this.defaultBackground = '#f0f1f8',
    this.defaultColor = '#94979b'
  }
  
  @ViewChildren('circle') circle!: ElementRef | any;

  ngOnInit(): void {} 

  //called after Angular has fully initialized a component's view, sets up the default clicked circle
  //to avoid Circular dependency in DI, instead of instantiating CircleSelectorComponent in the ClickService, we pass all the properties of CircleSelectorComponent to the ClickService (too many...)
  ngAfterViewInit(): void {this.clickService.clickedColors(this.highlightedBackground, this.highlightedColor, this.numberList, this.circle, this.defaultValue)}

  onClick($event: Event): void{
    this.clickService.onClick($event, this.numberList, this.circle, this.highlightedBackground, this.highlightedColor, this.defaultBackground, this.defaultColor)
  }

}
