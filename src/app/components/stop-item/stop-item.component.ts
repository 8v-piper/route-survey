import { Component, OnInit, Input } from '@angular/core';
import { Stop } from '../../Stop';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-stop-item',
  templateUrl: './stop-item.component.html',
  styleUrls: ['./stop-item.component.css']
})
export class StopItemComponent implements OnInit {
  @Input()  stop!: Stop;
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

}
