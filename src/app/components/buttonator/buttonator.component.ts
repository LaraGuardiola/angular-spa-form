import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-buttonator',
  templateUrl: './buttonator.component.html',
  styleUrls: ['./buttonator.component.css']
})
export class ButtonatorComponent implements OnInit {

  @Input() buttonText: string
  @Input() isDisabled: boolean
  @Input() backgroundColor: string;
  @Input() color: string;
  @Input() padding: string;
  @Input() borderRadius: string;
  @Input() fontFamily: string;
  @Input() fontWeight: string;
  @Input() fontSize: string;
  @Input() height: string;
  @Input() width?: string

  constructor() { 
    this.buttonText = 'VALIDAR'
    this.isDisabled = false
    this.backgroundColor = '#18acb5'
    this.color = '#ffffff'
    this.padding = '0.8em'
    this.borderRadius = '5px'
    this.fontFamily = 'Segoe UI'
    this.fontWeight = '600'
    this.fontSize = '1.5em'
    this.width = 'fit-content'
    this.height = 'fit-content'
  }

  @ViewChild('btn') btn: ElementRef | any

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setDefaultState()
  }

  setDefaultState(): void {
    this.btn.nativeElement.style.setProperty('background-color', this.backgroundColor)
    this.btn.nativeElement.style.setProperty('color', this.color)
    this.btn.nativeElement.style.setProperty('padding', this.padding)
    this.btn.nativeElement.style.setProperty('border-radius', this.borderRadius)
    this.btn.nativeElement.style.setProperty('font-family', this.fontFamily)
    this.btn.nativeElement.style.setProperty('font-weight', this.fontWeight)
    this.btn.nativeElement.style.setProperty('font-size', this.fontSize)
    this.btn.nativeElement.style.setProperty('height', this.height)
    if(this.width) {
      this.btn.nativeElement.style.setProperty('width', this.width)
    }
    if(this.isDisabled) {
      this.btn.nativeElement.style.setProperty('opacity', '0.5')
    }
  }

  onClick(event: Event): void {
    //this.btn.nativeElement.style.setProperty('background-color', `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`)
    let btn = (event.target as HTMLElement)
    console.log(btn)
  }
}
