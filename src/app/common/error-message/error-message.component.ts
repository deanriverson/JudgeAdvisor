import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  @Input() error: string;

  constructor() { }

  ngOnInit() {
  }

}
