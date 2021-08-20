import { Component, OnInit } from '@angular/core';
import {Stop} from '../../Stop';
import { STOPS } from "../../mock-stops";

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent implements OnInit {
  stops: Stop[] = STOPS;

  constructor() { }

  ngOnInit(): void {
  }

}
