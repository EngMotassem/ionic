import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {AuthModule} from '../../app/auth/auth.module'
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';

import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    AuthModule,
    HttpModule
  ],
  providers:[
    AuthProvider,UserProvider
  ]
})
export class LoginPageModule {}
