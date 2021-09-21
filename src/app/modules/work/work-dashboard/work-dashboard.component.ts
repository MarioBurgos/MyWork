import { Component, OnInit } from '@angular/core';
import { WORK_DATA } from 'src/app/data/constants';

@Component({
  selector: 'app-work-dashboard',
  templateUrl: './work-dashboard.component.html',
  styleUrls: ['./work-dashboard.component.scss']
})
export class WorkDashboardComponent implements OnInit {

  public data = {
    angularImg: WORK_DATA.IMG_ANGULAR_LOGO,
    otherProjectsImg: WORK_DATA.IMG_OTHER_PROJECTS,
    cardDescriptionAngular: WORK_DATA.CARD_DESCRIPTION_ANGULAR,
    cardDescriptionOtherProjects: WORK_DATA.CARD_DESCRIPTION_OTHER_PROJECTS
  }

  constructor() { }

  ngOnInit(): void {
  }

}
