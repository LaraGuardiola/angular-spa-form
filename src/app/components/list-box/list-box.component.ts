import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  //style of the select
  @Input() list: string[]
  @Input() selectWidth: number
  @Input() selectHeight: number
  @Input() selectBackgroundColor: string
  @Input() selectColor:  string
  @Input() fontFamily: string
  @Input() fontSize: number
  @Input() fontWeight: string
  @Input() borderBottom: string

  //style of the title
  @Input() title: string
  @Input() titleColor: string
  @Input() titleTop: string
  @Input() titleLeft: string
  @Input() titleFontSize: number

  //position of the triangle
  @Input() triangleTop: string
  @Input() triangleLeft: string
  @Input() triangleStandardSize: string
  @Input() triangleColor: string

  constructor() {
    this.selectWidth = 300
    this.selectHeight = 70
    this.selectBackgroundColor = '#e8ebf2'
    this.selectColor = '#88878b'
    this.fontFamily = 'Arial'
    this.fontSize = 16
    this.fontWeight = 'bold'
    this.borderBottom = '2px solid #88878b'
    this.title = 'Situación laboral'
    this.titleColor = '#88878b'
    this.titleFontSize = 12
    this.titleTop = `${ ((this.selectHeight / 2) - (this.titleFontSize / 2)) / 3}px`
    this.titleLeft = '20px'
    this.triangleTop = `${ (this.selectHeight / 2) + this.fontSize - 2 }px`
    this.triangleLeft = `${ this.selectWidth - 30}px`
    this.triangleStandardSize = '5px'
    this.triangleColor = '#88878b'
    this.list = [
      'Autónomo',
      'Asalariado',
      'Funcionario',
      'Pensionista'
    ]
  }

  @ViewChild('select') select: ElementRef | any
  @ViewChild('ptitle') ptitle: ElementRef | any
  @ViewChild('triangle') triangle: ElementRef | any

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setDefaultState()
  }

  setDefaultState(): void {
    this.setSelectDefaultState()
    this.setTitleDefaultState()
    this.setTriangleDefaultState()
  }

  //setting up select style
  setSelectDefaultState() {
    this.select.nativeElement.style.setProperty('width', this.selectWidth + 'px')
    this.select.nativeElement.style.setProperty('height', this.selectHeight + 'px')
    this.select.nativeElement.style.setProperty('background-color', this.selectBackgroundColor)
    this.select.nativeElement.style.setProperty('color', this.selectColor)
    this.select.nativeElement.style.setProperty('font-family', this.fontFamily)
    this.select.nativeElement.style.setProperty('font-size', this.fontSize + 'px')
    this.select.nativeElement.style.setProperty('font-weight', this.fontWeight)
    this.select.nativeElement.style.setProperty('border-bottom', this.borderBottom)
  }

  setTitleDefaultState() {
    this.ptitle.nativeElement.style.setProperty('color', this.titleColor)
    this.ptitle.nativeElement.style.setProperty('font-size', this.titleFontSize + 'px')
    this.ptitle.nativeElement.style.setProperty('top', this.titleTop)
    this.ptitle.nativeElement.style.setProperty('left', this.titleLeft)
  }

  setTriangleDefaultState() {
    this.triangle.nativeElement.style.setProperty('color', this.triangleColor)
    this.triangle.nativeElement.style.setProperty('top', this.triangleTop)
    this.triangle.nativeElement.style.setProperty('left', this.triangleLeft)
    this.triangle.nativeElement.style.setProperty('border-top', `${this.triangleStandardSize} solid ${this.triangleColor}`)
    this.triangle.nativeElement.style.setProperty('border-right', `${this.triangleStandardSize} solid transparent`)
    this.triangle.nativeElement.style.setProperty('border-left', `${this.triangleStandardSize} solid transparent`)
  }

}
