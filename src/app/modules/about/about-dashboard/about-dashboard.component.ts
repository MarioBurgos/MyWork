import { Component, OnInit } from '@angular/core';
import { ABOUT_DATA } from 'src/app/data/constants';

@Component({
  selector: 'app-about-dashboard',
  templateUrl: './about-dashboard.component.html',
  styleUrls: ['./about-dashboard.component.scss']
})
export class AboutDashboardComponent implements OnInit {

  public data = {
    title: ABOUT_DATA.TITLE,
    subtitle: ABOUT_DATA.SUBTITLE,
    content1: ABOUT_DATA.CONTENT_DESCRIPTION_1,
    content2: ABOUT_DATA.CONTENT_DESCRIPTION_2,
    content3: ABOUT_DATA.CONTENT_DESCRIPTION_3,
    content4: ABOUT_DATA.CONTENT_DESCRIPTION_4,

  }

  constructor() { }

  ngOnInit(): void {
  }

}
