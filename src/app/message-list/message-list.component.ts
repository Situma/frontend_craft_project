import { ExpansionCase } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Message } from '../message/message.component';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.less'],
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    {
      icons: ['../../assets/photos/Profile 2.jpg'],
      message:
        "Yeah that sounds great, want to grab drinks tonight? I'm free after work. Why don't you give me a call when you are done and we can meet up at the Market? I think it's wings night and I would be totally down for some food!",
      time: 'June 9 at 7:08pm',
    },
    {
      icons: [
        '../../assets/photos/Profile 8.jpg',
        '../../assets/photos/Profile 15.jpg',
        '../../assets/photos/Profile 2.jpg',
        '../../assets/photos/Profile 2.jpg',
      ],
      message:
        "I got tickets! We are good to go, second balcony but at least we are going! It's going to be epic. Usual place for dinner first? I need me some pizza!",
      time: 'May 18 at 3:21pm',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
