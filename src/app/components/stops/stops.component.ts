import { Component, OnInit } from '@angular/core';
import { StopService } from '../../services/stop.service'
import {Stop} from '../../Stop';


@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent implements OnInit {
  stops: Stop[] = [];

  constructor(private stopService: StopService) { }

  ngOnInit(): void {
    this.stopService.getStops().subscribe((stops) => (this.stops = stops));
  }

  deleteStop(stop: Stop) {
    this.stopService.deleteStop(stop).subscribe(() => (this.stops = this.stops.filter(s => s.stopId ! !== stop.stopId)));
  }

  toggleReminder(stop: Stop) {
    stop.reminder = !stop.reminder;
    this.stopService.updateStopReminder(stop).subscribe();
  }
  addStop(stop: Stop) {
    this.stopService.addStop(stop).subscribe((stop) => (this.stops.push(stop)));
  }
}
