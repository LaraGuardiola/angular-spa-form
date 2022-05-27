import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { faSliders, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

  //style of the symbol
  @Input() symbol: IconDefinition
  @Input() symbolSize: string
  @Input() symbolColor: string

  //style of the text
  @Input() buttonText: string
  @Input() buttonColor: string
  @Input() buttonFontFamily: string

  //style of the fake button
  @Input() hasBorder: boolean
  @Input() borderSize: string
  @Input() borderColor: string
  @Input() width: number
  @Input() height: number
  @Input() padding: string
  @Input() backgroundColor: string
  @Input() borderRadius: string

  constructor() { 
    this.symbol = faSliders
    this.symbolSize = '24px'
    this.symbolColor = '#18acb5'
    this.buttonText = 'VER DETALLES'
    this.buttonColor = '#18acb5'
    this.buttonFontFamily = 'Arial'
    this.borderColor = '#18acb5'
    this.borderSize = '2px'
    this.hasBorder = true
    this.width = Math.round(this.buttonText.length * 13.3)
    this.height = 30
    this.padding = '0.8em'
    this.backgroundColor = '#ffffff'
    this.borderRadius = '5px'
  }

  @ViewChild('icon') icon: ElementRef | any
  @ViewChild('button') button: ElementRef | any
  @ViewChild('text') text: ElementRef | any

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setDefaultState()
  }

  //setting up default state

  setDefaultState(): void {
    this.setSymbolDefaultState()
    this.setButtonDefaultState()
    this.setTextDefaultState()
  }

  setSymbolDefaultState(): void {
    this.icon.nativeElement.style.setProperty('font-size', this.symbolSize)
    this.icon.nativeElement.style.setProperty('color', this.symbolColor)
  }

  setTextDefaultState(): void {
    this.text.nativeElement.style.setProperty('color', this.buttonColor)
    this.text.nativeElement.style.setProperty('font-family', this.buttonFontFamily)
  }

  setButtonDefaultState(): void {
    this.button.nativeElement.style.setProperty('border', this.hasBorder ? `${this.borderSize} solid ${this.borderColor}` : 'none')
    this.button.nativeElement.style.setProperty('width', `${this.width}px`)
    this.button.nativeElement.style.setProperty('height', `${this.height}px`)
    this.button.nativeElement.style.setProperty('padding', this.padding)
    this.button.nativeElement.style.setProperty('background-color', this.backgroundColor)
    this.button.nativeElement.style.setProperty('border-radius', this.borderRadius)
  }

  //*Events

  onClick(event: Event): void {
    let button = (event.target as HTMLElement)
    console.log(button)
  }
}
