import { Component, OnInit } from '@angular/core';
import { FeedItem } from '../feed-item/feed-item.component';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.less'],
})
export class FeedListComponent implements OnInit {
  feed: FeedItem[] = [
    {
      icon: 'tiktok',
      message: 'Posted on TikTok',
      subtext: '',
      imagePath: '../../assets/photos/pexels-photo-6898856.jpeg',
      time: 'Today at 3:21pm',
    },
    {
      icon: 'twitch',
      message:
        "We're live! Join us for more ESO. Can i get past the character creation screen? Probably not!",
      subtext: '@istaplann was live for 3 hours and 54 minutes',
      time: 'Yesterday at 6:57pm',
      imagePath: '',
    },
    {
      icon: 'instagram',
      message:
        'Cherry blossoms are in full bloom. They make the walk in to work a dream. #blessed #spring #cherryblossoms #flowers #bloom #healthyliving',
      subtext: '',
      time: 'Monday at 7:19am',
      imagePath: '../../assets/photos/pexels-photo-931181.jpeg',
    },
    {
      icon: 'twitter',
      message:
        "Why can't it be take your pet to work day every day? i mean come on, i could use cat snuggles right now.",
      subtext: '',
      time: 'June 25 at 3:28pm',
      imagePath: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
