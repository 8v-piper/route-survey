import { Injectable } from '@angular/core';
import { Observable,Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddStop: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddStop(): void {
    this.showAddStop = !this.showAddStop;
    this.subject.next(this.showAddStop)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
