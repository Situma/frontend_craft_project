import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.less'],
})
export class FeedItemComponent implements OnInit {
  @Input()
  feedItem: FeedItem = {
    icon: '',
    time: '',
    message: '',
    subtext: '',
    imagePath: '',
  };
  constructor() {}

  ngOnInit(): void {}
}

export class FeedItem {
  icon: string = '';
  time: string = '';
  message: string = '';
  subtext: string = '';
  imagePath: string = '';
}
