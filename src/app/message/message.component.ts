import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less'],
})
export class MessageComponent implements OnInit {
  
  @Input()
  message: Message = { time: '', message: '', icons: [] };

  constructor() {}

  ngOnInit(): void {}
}

export class Message {
  time: string = '';
  message: string = '';
  icons: string[] = [];
}
