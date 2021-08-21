import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-stop',
  templateUrl: './add-stop.component.html',
  styleUrls: ['./add-stop.component.css']
})
export class AddStopComponent implements OnInit {
  text: string | undefined;
  day: string | undefined;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a stop')
      return;
    }

    const newStop = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }


    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
