import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../app/_model/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: any = {};
  role:string;
  user:User;


  constructor(public navCtrl: NavController, public navParams: NavParams,private auth:AuthProvider,private us:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.auth.userlogin(this.model).subscribe(data => {
      console.log('Logged in successfully');
     // this.role=data.Rolename;
      


    }, error => {
      console.log('Failed to login');

     // this.alertifyService.errormessage('FAILD  login');
     //this.showError();

    }, () => {
      this.us.getUser(localStorage.getItem('userid')).subscribe(data=>{
        //this.user = data
        console.log(this.user=data)

        // navatigation based on user roles

        if(this.user.rolename=='admin'){
          this.navCtrl.push('AdminPage')
        }
        else{
          this.navCtrl.push('TabsPage')
        }

      })

    

     // this.navCtrl.push('TabsPage')
     // this.assignrole();
      //this.isAdmin();


      //this.route.navigate(['members']);
     // console.log(this.user.Rolename);



    }
  );
  }



  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }


}
