import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickEffectService {

  constructor() { }
  
  clickedColors(backgroundColor: string,
               color: string, 
               numberList: (string | number)[], 
               circle: ElementRef | any, 
               defaultValue: string | number): void {
    let circleHighlighted = circle._results[numberList.indexOf(defaultValue)]
    this.setClickedEffect(circleHighlighted, backgroundColor, color)
  }

  //marks circles as clicked, and unclicks the previously clicked circle
  onClick($event: Event,
         numberList: (string | number)[],
         circle: ElementRef | any,
         highlightedBackground: string,
         highlightedColor: string,
         defaultBackground: string,
         defaultColor: string): void {
    let elem = ($event.target as HTMLElement)
    let index = numberList.map( num => num.toString()).indexOf(elem.innerText)
    circle._results.forEach((elem: ElementRef, i: number) => {
      if(index === i){
        this.setClickedEffect(elem, highlightedBackground, highlightedColor)
        return
      }
      this.setClickedEffect(elem, defaultBackground, defaultColor)
    })
  }

  setClickedEffect(elem: ElementRef, backgroundColor: string, color: string){
    elem.nativeElement.style.setProperty('background-color',backgroundColor)
    elem.nativeElement.style.setProperty('color',color)
  }
}


