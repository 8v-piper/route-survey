import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Stop } from '../../Stop';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-stop',
  templateUrl: './add-stop.component.html',
  styleUrls: ['./add-stop.component.css']
})
export class AddStopComponent implements OnInit {
  @Output() onAddStop: EventEmitter<Stop> = new EventEmitter();

  stopId!: number;
  text!: string;
  latt!: string;
  long!: string;
  direction!: string;
  reminder: boolean = false;
  showAddStop: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddStop = value));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a stop')
      return;
    }

    const newStop = {
      stopId: this.stopId,
      text: this.text,
      latt: this.latt,
      long: this.long,
      direction: this.direction,
      reminder: this.reminder
    }

    this.onAddStop.emit(newStop);

    this.stopId = 0;
    this.text = '';
    this.latt = '';
    this.long = '';
    this.direction = '';
    this.reminder = false;
  }

}
