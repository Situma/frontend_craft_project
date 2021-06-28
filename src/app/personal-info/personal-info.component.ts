import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.less'],
})
export class PersonalInfoComponent implements OnInit {
  details: PersonalDetails = {
    emails: [
      {
        icon: 'email',
        name: 'Personal',
        detail: 'elliej@email.com'
      },
      {
        icon: 'email',
        name: 'Freelance',
        detail: 'elliej.@engage.com'
      }
    ],
    phones: [
      {
        icon: 'phone',
        name: 'Work',
        detail: '780-999-9996'
      },
      {
        icon: 'phone',
        name: 'Mobile',
        detail: '780-555-7894'
      }
    ],
    addresses: [
      {
        icon: 'home',
        name: '',
        detail: '8536 Clover Crescent Edmonton, Alberta T4G 9F2'
      }
    ],
    birthday: { icon: 'gift', name: '', detail: 'January 29' },
  };

  isEditMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }
}

export class PersonalDetails {
  emails: PersonalDetailItem[] = [];
  phones: PersonalDetailItem[] = [];
  addresses: PersonalDetailItem[] = [];
  birthday: PersonalDetailItem = { icon: '', name: '', detail: '' };
}

export class PersonalDetailItem {
  icon: string = '';
  name: string = '';
  detail: string = '';
}
