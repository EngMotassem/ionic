import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  height:number
  weight:number
  result:number

  constructor(public navCtrl: NavController) {

  }

  getResult(h:number,w:number):number{
return this.result=this.weight/this.height/this.height
  }

}
