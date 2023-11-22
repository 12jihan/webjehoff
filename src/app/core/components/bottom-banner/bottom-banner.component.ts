import { Component } from '@angular/core';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'jeh-bottom-banner',
  templateUrl: './bottom-banner.component.html',
  styleUrl: './bottom-banner.component.scss'
})
export class BottomBannerComponent {

  faGithub = faGithub;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faYoutube = faYoutube;


}
