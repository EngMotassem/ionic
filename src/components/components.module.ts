import { NgModule } from '@angular/core';
import { MemberlistComponent } from './memberlist/memberlist';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

@NgModule({
	declarations: [MemberlistComponent],
	imports: [
		IonicModule.forRoot(ComponentsModule)


	],
	exports: [MemberlistComponent],
	bootstrap: [IonicApp],

})
export class ComponentsModule {}
