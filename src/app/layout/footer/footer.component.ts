import { Component, OnInit } from '@angular/core';
import { FOOTER_DATA } from 'src/app/data/constants/layout/footer.const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public data = {
    title: FOOTER_DATA.NAME,
    description: FOOTER_DATA.DESCRIPTION,
    linkCV: FOOTER_DATA.DESCRIPTION,
    linkAngular: FOOTER_DATA.LINK_ANGULAR,
    linkContact: FOOTER_DATA.LINK_CONTACT,
    iconLinkedin: FOOTER_DATA.ICON_LINKEDIN,
    iconInstagram: FOOTER_DATA.ICON_INSTAGRAM,

  }

  constructor() { }

  ngOnInit(): void {
  }

}
