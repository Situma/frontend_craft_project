import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.less'],
})
export class SocialsComponent implements OnInit {
  socials: Social[] = [
    { icon: 'tiktok', url: '@EllieJplanning' },
    { icon: 'facebook', url: 'www.facebook.com/EllieJordan43' },
    { icon: 'instagram', url: '@itsaplann' },
    { icon: 'twitch', url: '@itsaplann' },
    { icon: 'twitter', url: '@itsaplann' },
    { icon: 'website', url: 'www.EllieJordan.ca' },
  ];

  isEditMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  onAddRecord(): void {
    this.socials.push({ icon: 'website', url: 'www.newwebsite.com' });
  }
}

export class Social {
  icon: string = '';
  url: string = '';
}
