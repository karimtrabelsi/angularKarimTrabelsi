import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FournisseurModule { 
  idFournisseur !: number;
  code !: string;
  libelle !: string;
  }
