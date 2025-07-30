import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() { }

  public titleAnimations(elementId: string,keepEnd?: boolean): number{
    const element: HTMLElement = document.getElementById(elementId) as HTMLElement;
    const top: number = element.getBoundingClientRect().top;
    const momentElementNotSticky: number = element.clientHeight - window.innerHeight;
    const momentLabelJustUnderTitle: number = top + window.innerHeight/2;
    if(momentLabelJustUnderTitle < 0 && -top < momentElementNotSticky){
      const percent: number = -momentLabelJustUnderTitle / (momentElementNotSticky - window.innerHeight/2) * 100;
      return percent;
    } else if(-top > momentElementNotSticky && keepEnd){
      return 100;
    }
    return 0;
  }

  public appears(): void{
      const informationsElements: HTMLCollectionOf<Element> = document.getElementsByClassName("appearsAnimation");
      const nbInformations: number = informationsElements.length;
      for(let index = 0; index < nbInformations; index++){
        const element: Element = informationsElements.item(index) as Element;
        const top: number = element.getBoundingClientRect().top;
        if(top <= window.innerHeight * 0.8 && top > -(window.innerHeight * 0.6)){
            element.classList.remove('hidden');
        } else{
            element.classList.add('hidden');
        }
      }
    }

  public sideAppears(): void{
      const informationsElements: HTMLCollectionOf<Element> = document.getElementsByClassName("sideAppearsAnimation");
      const nbInformations: number = informationsElements.length;
      for(let index = 0; index < nbInformations; index++){
        const element: Element = informationsElements.item(index) as Element;
        const top: number = element.getBoundingClientRect().top;
        let enterClass: string = 'enterRight';
        if(index % 2 === 0){
          enterClass = 'enterLeft';
        }

        if(top <= window.innerHeight * 0.8 && top > -(window.innerHeight * 0.6)){
            element.classList.remove(enterClass);
            element.classList.remove('hidden');
        } else{
            element.classList.add(enterClass);
            element.classList.add('hidden');
        }
        
        
      }
    }
}
