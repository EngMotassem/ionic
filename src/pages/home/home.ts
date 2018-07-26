import { Component } from '@angular/core';
import { NavController ,ToastController, IonicPage} from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  personName:string;

  constructor(public navCtrl: NavController ,private toast:ToastController) {
 //this.ShowGrettings() =new this.ShowGrettings()
  }

  showGrettings(name:string){
console.log(name);
this.personName=""
this.toast.create({
  message:`welcome ${name}`,
  duration:3000
}).present();
  }

}
