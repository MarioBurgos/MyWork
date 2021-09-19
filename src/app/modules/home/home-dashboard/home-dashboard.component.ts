import { Component, OnInit } from '@angular/core';
import { HOME_DATA } from 'src/app/data/constants';
import { slideInAnimation } from 'src/assets/animations/slide-in.animation';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class HomeDashboardComponent implements OnInit {

  slideAnimation= false;

  public data= {
    bg : HOME_DATA.BACKGROUND,
    title : HOME_DATA.TITLE,
    img : HOME_DATA.IMG_MY_NAME_IS
  }

  constructor() { }

  ngOnInit(): void {
    this.slideAnimation = true;
  }

}
