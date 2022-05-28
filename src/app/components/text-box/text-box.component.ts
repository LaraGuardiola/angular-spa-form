import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faCircleExclamation, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  //Style of the input 
  @Input() inputType: string
  @Input() height: number
  @Input() width: number
  @Input() fontSize: number
  @Input() backgroundColor: string

  //style of the placeholder
  @Input() placeholder: string
  @Input() placeholderFontSize: number
  @Input() animation: string
  @Input() left: string
  @Input() top: string
  @Input() focusTop: string
  @Input() focusFontSize: number 
  @Input() fontWeight: number
  @Input() placeholderColor: string

  //style of the icon
  @Input() symbol: IconDefinition
  @Input() iconTop: string
  @Input() iconRight: string
  @Input() iconSize: number
  @Input() iconColor: string
  @Input() hasWarning: boolean

  //style of the validation message
  @Input() defaultMessage: string
  @Input() warningMessage: string
  @Input() defaultMessageColor: string;
  @Input() warningMessageColor: string;
  @Input() msg: string
  @Input() messageFontFamily: string
  @Input() messageFontSize: string;

  constructor() {
    this.inputType = 'password'
    this.height = 54
    this.width = 600
    this.fontSize = 14
    this.backgroundColor = '#e8ebf2'
    this.placeholder = 'Número de documento'
    this.placeholderFontSize = 18
    this.animation = '0.2s ease all'
    this.symbol = faCircleExclamation
    this.left = '20px'
    this.top = `${ (this.height / 2) - (this.placeholderFontSize / 2) }px`
    this.focusTop = `${ ( (this.height / 2) - (this.placeholderFontSize / 2) ) / 3 }px`
    this.focusFontSize = 12
    this.fontWeight = 600
    this.placeholderColor = '#828285'
    this.iconSize = 28
    this.iconTop = `${ (this.height / 2) - (this.iconSize / 2) }px`
    this.iconRight = '20px'
    this.iconColor = '#f03136'
    this.hasWarning = false
    this.defaultMessage = 'Documento válido: NIF/NIE'
    this.warningMessage = '¿¡Qué demonios haces?!'
    this.msg = this.defaultMessage
    this.defaultMessageColor = '#d0d2d1'
    this.warningMessageColor = '#f03136'
    this.messageFontFamily = 'Arial'
    this.messageFontSize = '12px'
   }

   @ViewChild('input') input: ElementRef | any
   @ViewChild('placeHODL') placeHODL: ElementRef | any
   @ViewChild('icon') icon: ElementRef | any
   @ViewChild('message') message: ElementRef | any
   @ViewChild('inputParent') inputParent: ElementRef | any

  ngOnInit(): void {}

   //*DEFAULT STATE

  ngAfterViewInit(): void {
    this.setDefaultState()
  }

  setDefaultState(): void {
    this.setInputDefaultState()
    this.setPlaceholderDefaultState()
    this.setIconDefaultState()
    this.setMessageDefaultState()
  }

  //setting up input style
  setInputDefaultState(): void {
    this.setInputColors()
    this.setInputBorder()
    this.setInputSize()
    this.setDivSize()
  }

  setInputColors(): void {
    this.input.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  setInputBorder(): void {
    this.input.nativeElement.style.borderBottom = '2px solid #88878b'
  }

  setDivSize(): void {
    this.inputParent.nativeElement.style.setProperty('height', `${this.height}px`)
    this.inputParent.nativeElement.style.setProperty('width', `${this.width}px`)
  }
  setInputSize(): void {
    this.input.nativeElement.style.setProperty('height', `${this.height}px`)
    this.input.nativeElement.style.setProperty('width', `${this.width}px`)
    this.input.nativeElement.style.setProperty('font-size', `${this.fontSize}px`)
  }

  //setting up placeholder style
  setPlaceholderDefaultState(): void {
    this.setPlaceholderAnimation()
    this.setPlaceholderStyle()
  }
  setPlaceholderAnimation(): void {
    this.placeHODL.nativeElement.style.setProperty('transition', this.animation)
  }

  setPlaceholderStyle(): void {
    this.placeHODL.nativeElement.style.setProperty('font-size', `${this.placeholderFontSize}px`)
    this.placeHODL.nativeElement.style.setProperty('left', this.left)
    this.placeHODL.nativeElement.style.setProperty('top', this.top)
    this.placeHODL.nativeElement.style.setProperty('color', this.placeholderColor)
  }

  //setting up icon style

  setIconDefaultState(): void {
    this.icon.nativeElement.style.setProperty('top', this.iconTop)
    this.icon.nativeElement.style.setProperty('right', this.iconRight)
    this.icon.nativeElement.style.setProperty('font-size', `${this.iconSize}px`)
    this.icon.nativeElement.style.setProperty('color', this.iconColor)
  }

  //setting up validation message style

  setMessageDefaultState(): void {
    this.message.nativeElement.style.setProperty('font-family', this.messageFontFamily)
    this.message.nativeElement.style.setProperty('font-size', this.messageFontSize)
    this.message.nativeElement.style.setProperty('color', this.defaultMessageColor)
  }


  //* Events

  onFocus(): void {
    this.placeHODL.nativeElement.style.setProperty('top', this.focusTop)
    this.placeHODL.nativeElement.style.setProperty('font-size', `${this.focusFontSize}px`)
    this.placeHODL.nativeElement.style.setProperty('transition', this.animation)
  }

  onFocusOut(): void {
    if(this.input.nativeElement.value.length > 0){
      this.placeHODL.nativeElement.style.setProperty('top', this.focusTop)
      this.placeHODL.nativeElement.style.setProperty('font-size', `${this.focusFontSize}px`)
      this.placeHODL.nativeElement.style.setProperty('font-weight', `${this.fontWeight}`)
    }else{
      this.placeHODL.nativeElement.style.setProperty('font-size', `${this.placeholderFontSize}px`)
      this.placeHODL.nativeElement.style.setProperty('top', this.top)
    }
  }

  displayWarnings(): void {
    this.input.nativeElement.value.length > 10 
      ? this.hasWarning = true
      : this.hasWarning = false

    if(this.hasWarning){
      this.msg = this.warningMessage
      this.message.nativeElement.style.setProperty('color', this.warningMessageColor)
      this.placeHODL.nativeElement.style.setProperty('color', this.warningMessageColor)
    }else{
      this.msg = this.defaultMessage
      this.message.nativeElement.style.setProperty('color', this.defaultMessageColor)
      this.placeHODL.nativeElement.style.setProperty('color', this.placeholderColor)
    }
  }


}
