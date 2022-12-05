import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModule } from '../model/user/user.module';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url=environment.baseUrl+'users'

  constructor(private http:HttpClient) { 
   
  }


  // list=[
  //   {
  //   idCustomer: 1,
  //   firstName: "Mila",
  //   lastName: " Kunis",
  //   birthDate: "1999-06-30",
  //   accountCategory: "Admin",
  //   email: "mila@kunis.com",
  //   password: "test",
  //   picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
  //   profession: "Software Engineer"
  //   },
  //   {
  //   idCustomer: 2,
  //   firstName: "George",
  //   lastName: "Clooney",
  //   birthDate: "1999-06-30",
  //   accountCategory: "Customer",
  //   email: "marlon@brando.com",
  //   password: "test",
  //   picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
  //   profession: "Software Engineer"
  //   },
  //   {
  //   idCustomer: 3,
  //   firstName: "George",
  //   lastName: "Clooney",
  //   birthDate: "1999-06-30",
  //   accountCategory: "Customer",
  //   email: "marlon@brando.com",
  //   password: "test",
  //   picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
  //   profession: "Software Engineer"
  //   },
  //   {
  //   idCustomer: 4,
  //   firstName: "Ryan",
  //   lastName: "Gossling",
  //   birthDate:"1999-06-30",
  //   accountCategory: "Golden",
  //   email: "Ryan@nicholson.com",
  //   password: "test",
  //   picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
  //   profession: "Software Engineer"
  //   },
  //   {
  //   idCustomer: 5,
  //   firstName: "Robert",
  //   lastName: "Downey",
  //   birthDate: "1999-06-30",
  //   accountCategory: "Blocked Account",
  //   email: "robert@nicholson.com",
  //   password: "test",
  //   picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
  //   profession: "Software Engineer"
  //   }
  //   ]

  //   getAllUsers(){
  //     return this.list
  //   }
  //   fetchNbInList(list: any, attribute:string, attributeVal: string){
  //     let nb=0;
  //     for(let i of list){
  //       if(i[attribute]===attributeVal){
  //         nb++;
  //       }
  //     }
  //     return nb;
  //   }

  getAllUsers(user: UserModule): Observable<UserModule>
  {
    return this.http.get<UserModule>(this.url)
  }

}
