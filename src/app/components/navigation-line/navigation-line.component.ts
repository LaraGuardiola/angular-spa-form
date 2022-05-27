import { Component, OnInit, Input, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navigation-line',
  templateUrl: './navigation-line.component.html',
  styleUrls: ['./navigation-line.component.css']
})
export class NavigationLineComponent implements OnInit {

  //list of element to display
  @Input() elemList: (string | number)[]

  //icon to place inside the navigation line
  @Input() symbol: IconDefinition

  //size of the circles of the navigation line
  @Input() size: number;

  //size of the lines between circles
  @Input() lineWidth: number;
  @Input() lineHeight: number

  //default starter value for the navigation line
  @Input() defaultValue: number;
  @Input() highlightedBGColor: string;
  @Input() defaultBGcolor: string;

  //default starter value for the list
  @Input() defaultListColor: string;
  @Input() completeColor: string;

  //style of the navigation line and list of elements
  @Input() circleStyle = {}
  @Input() lineStyle = {}
  @Input() listStyle = {}

  //*LINE REFERENCES
  @ViewChildren('circle') circle!: ElementRef | any
  @ViewChildren('line') line!: ElementRef | any
  @ViewChildren('tick') tick!: ElementRef | any

  //*LIST REFERENCES
  @ViewChildren('list') list!: ElementRef | any

  //*MINI FORM REFERENCES
  @ViewChild('input') input!: ElementRef | any
  @ViewChild('previousBtn') previousBtn!: ElementRef | any
  @ViewChild('nextBtn') nextBtn!: ElementRef | any

  constructor() {
  this.elemList = ['Datos personales', 'Situación actual', 'Situación económica', 'Oferta', 'Identificación', 'Firma y documentación']
    this.symbol = faCheck
    this.size = 30
    this.lineWidth = 6
    this.lineHeight = 70
    this.defaultValue = 4
    this.defaultBGcolor = '#f0f1f8'
    this.highlightedBGColor = '#1aafb6'
    this.defaultListColor = '#d2d2d2'
    this.completeColor = 'black'
    this.listStyle = {
      fontFamily: 'Arial',
      marginTop: `${this.size / 6}px`,
      marginBottom: `${this.lineHeight + (this.size * 0.3)}px`,
      fontSize: `${this.size * 0.6}px`,
      color: this.defaultListColor
    }
    this.circleStyle = {
      width: `${this.size}px`,
      height: `${this.size}px`,
      fontSize: `${this.size * 0.6}px`,
      backgroundColor: this.defaultBGcolor,
    }
    this.lineStyle = {
      width: `${this.lineWidth}px`,
      height: `${this.lineHeight}px`,
      left: `${(this.size / 2) - (this.lineWidth / 2)}px`,
      backgroundColor: this.defaultBGcolor,
    }
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.setDefaultState()
  }

  setDefaultState() {
    this.setDefaultLine()
    this.setDefaultList()
  }

  setDefaultLine() {
    this.setCircles()
    this.setLines()
    this.setSymbols()
  }

  setCircles() {
    this.circle._results.forEach((elem: ElementRef, index: number) => {
      if (this.defaultValue < index) {
        elem.nativeElement.style.setProperty('background-color', this.defaultBGcolor)
      } else {
        elem.nativeElement.style.setProperty('background-color', this.highlightedBGColor)
      }
    })
  }

  setLines() {
    this.line._results.forEach((elem: ElementRef, i: number) => {
      if (this.defaultValue < i + 1) {
        elem.nativeElement.style.setProperty('background-color', this.defaultBGcolor)
      } else {
        elem.nativeElement.style.setProperty('background-color', this.highlightedBGColor)
      }
    })
  }

  setSymbols() {
    this.tick._results.forEach((elem: ElementRef, i: number) => {
      if (this.defaultValue === 0)
        elem.nativeElement.style.display = 'none'
      if (this.defaultValue < i + 1) {
        elem.nativeElement.style.display = 'none'
      } else {
        elem.nativeElement.style.display = 'block'
      }
    })
  }

  setDefaultList() {
    this.list._results.forEach((elem: ElementRef, index: number) => {
      if (this.defaultValue < index) {
        elem.nativeElement.style.setProperty('color', this.defaultListColor)
      } else {
        elem.nativeElement.style.setProperty('color', this.completeColor)
      }
      if (index === this.defaultValue) {
        elem.nativeElement.style.setProperty('font-weight', 'bold')
        elem.nativeElement.style.setProperty('color', this.highlightedBGColor)
      } else {
        elem.nativeElement.style.setProperty('font-weight', 'normal')
      }
    })
  }

  onComplete() {
    if (this.input.nativeElement.value.length > 0) {
      this.tick._results[this.defaultValue].nativeElement.style.display = 'block'
    } else {
      this.tick._results[this.defaultValue].nativeElement.style.display = 'none'
    }
  }

  previous() {
    if (this.defaultValue === 0) return
    this.input.nativeElement.value = ''
    this.defaultValue--
    this.setDefaultState()
    this.onComplete()
  }

  next() {
    if (this.defaultValue === this.elemList.length - 1) return
    this.input.nativeElement.value = ''
    this.defaultValue++
    this.setDefaultState()
    this.onComplete()
  }
}
