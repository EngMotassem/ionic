import { Component ,OnInit} from '@angular/core';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../app/_model/user';

/**
 * Generated class for the MemberlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'memberlist',
  templateUrl: 'memberlist.html'
})
export class MemberlistComponent {

  text: string;
   //user:Observable User[];
  // Observable<User[]>
  user:User[];

  constructor(private userprovider: UserProvider) {
    console.log('Hello MemberlistComponent Component');
    this.text = 'Hello World';
    //this.user=userprovider.getUsers();
  // console.log(userprovider.getUsers());

  }
  ngOnInit(){
    this.userprovider.getUsers().subscribe(data=> 
      console.log(this.user=data)
    );
    //console.log(this.user);

    this.getdata();


  }

  getdata(){

    this.userprovider.getAllUsers().subscribe(data=>console.log(data))
  }
  

  

}
