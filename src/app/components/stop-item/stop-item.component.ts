import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stop } from '../../Stop';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-stop-item',
  templateUrl: './stop-item.component.html',
  styleUrls: ['./stop-item.component.css']
})
export class StopItemComponent implements OnInit {
  @Input()  stop!: Stop;
  @Output() onDeleteStop: EventEmitter<Stop> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Stop> = new EventEmitter();
  
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(stop: any) {
    this.onDeleteStop.emit(stop)
  }
  onToggle(stop: any) {
    this.onToggleReminder.emit(stop)
  }
}
