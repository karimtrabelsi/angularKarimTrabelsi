import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  idCustomer!: number;
firstName!: string;
lastName!: string;
birthDate!: string;
email!: string;
password!: string;
profession!: string;
accountCategory!: string;
picture!: string;
 }
