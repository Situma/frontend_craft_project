import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'frontend-craft-project';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'music',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/music.svg')
    );
    iconRegistry.addSvgIcon(
      'flag',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/flag-checkered.svg')
    );
    iconRegistry.addSvgIcon(
      'beer',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/beer.svg')
    );
    iconRegistry.addSvgIcon(
      'email',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/envelope.svg')
    );
    iconRegistry.addSvgIcon(
      'phone',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/phone.svg')
    );
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/home.svg')
    );
    iconRegistry.addSvgIcon(
      'gift',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/gift.svg')
    );
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/pencil-alt.svg')
    );
    iconRegistry.addSvgIcon(
      'save',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/check.svg')
    );
    iconRegistry.addSvgIcon(
      'tiktok',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/social/tiktok.svg')
    );
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/social/facebook-f.svg')
    );
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/social/instagram.svg')
    );
    iconRegistry.addSvgIcon(
      'twitch',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/social/twitch.svg')
    );
    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/social/twitter.svg')
    );
    iconRegistry.addSvgIcon(
      'website',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/social/cubes.svg')
    );
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/plus-square.svg')
    );
  }
}
