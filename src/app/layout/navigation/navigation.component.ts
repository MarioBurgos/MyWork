import { Component, OnInit } from '@angular/core';
import { NAVIGATION_DATA } from 'src/app/data/constants/layout/navigation.const';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public data = {
    logo: NAVIGATION_DATA.LOGO,

  }

  constructor() { }

  ngOnInit(): void {
  }

}
