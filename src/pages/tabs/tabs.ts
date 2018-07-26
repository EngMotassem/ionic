import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root:any = 'HomePage'; 
 tab2Root :any = 'AboutPage';
  tab3Root :any ='ContactPage';

  constructor() {

  }
}
