import { Component, OnInit } from '@angular/core';
import { CV_DATA } from 'src/app/data/constants/components/cv.const';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  public data = {
    photo: CV_DATA.PHOTO,
    name: CV_DATA.NAME,
    imgSoftskills: CV_DATA.IMG_SOFTSKILLS,

  }

  constructor() { }

  ngOnInit(): void {
  }

}
