import { Component, OnInit, Input } from '@angular/core';
import { faSkull, faVolcano, faVirusCovid, faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  //style of the symbols
  @Input() symbol: any[]
  @Input() symbol1: any[]

  //style of the texts
  @Input() mainText: string[]

  //display if recommended div appears or not
  @Input() isRecommendedGroup: boolean[]

  //style and value of the radio buttons
  @Input() radioValues: boolean[]
  @Input() recommendedText: string

  //style and visibility of the lists
  @Input() displayLists: boolean[]
  @Input() list: string[]
  @Input() list1: string[]
  @Input() itemList: any[]

  constructor() {
    this.recommendedText = "Recomendado"

    this.isRecommendedGroup = [true, false]
    this.displayLists = [true, false]
    this.radioValues = [true, false]

    this.symbol = [faTrophy, faSkull, faVirusCovid]
    this.symbol1 = [faVolcano, faSkull]

    this.mainText = [
      '<strong>Sí</strong>, cumplo con los requisitos y quiero una respuesta inmediata',
      'No, no quiero beneficiarme de las ventajas de BankReady'
    ]

    this.list = [
        "Envio de tus fondos antes",
        "Formulario corto",
        "Menos documentación"
    ],
    this.list1 = [
        "Puede que salga",
        "Puede que no",
    ]

    this.itemList = [ 
      {
        mainText: this.mainText,
        isRecommended: this.isRecommendedGroup,
        displayLists: this.displayLists,
        list: this.list,
        symbol: this.symbol,
        radioValues: this.radioValues
      },
      {
        mainText: this.mainText,
        isRecommended: this.isRecommendedGroup,
        displayLists: this.displayLists,
        list: this.list1,
        symbol: this.symbol1,
        radioValues: this.radioValues
      }
    ]
   }

  ngOnInit(): void {}

  onCheck(event: Event): void {
    let target = (event.target as HTMLInputElement)
    console.log(target.value)
  }
}
