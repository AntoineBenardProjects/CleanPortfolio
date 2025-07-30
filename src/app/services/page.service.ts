import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private pageTitle: Subject<string> = new Subject();

  public getPageTitle(): Observable<string>{
    return this.pageTitle.asObservable();
  }

  public setPageTitle(newPageTitle: string): void{
    this.pageTitle.next(newPageTitle);
  }
}