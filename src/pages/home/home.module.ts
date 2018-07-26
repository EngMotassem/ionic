import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from './home';
import { ComponentsModule } from '../../components/components.module';
import { HttpClientModule } from '@angular/common/http'; 


import { UserProvider } from '../../providers/user/user';

@NgModule({
    declarations: [
      
      HomePage,
    
    ],
    imports: [
      ComponentsModule,
      HttpClientModule,
      IonicPageModule.forChild(HomePage)
    ],
    entryComponents: [
      HomePage,
    ]
    ,
    providers:[
      UserProvider
    ]
  })
  export class HomePageModule {}
  