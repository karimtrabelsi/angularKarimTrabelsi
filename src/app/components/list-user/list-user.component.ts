import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/model/user/user.module';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users!:UserModule[];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    //this.users = this.userservice.getAllUsers();
   
   //console.log(this.userservice.fetchNbInList(this.userservice.list,'firstName','Mila'));
    
  }

  deleteUser(id:any){
    let index=this.users.indexOf(id);
    this.users.splice(index,1);
    
  }
}
