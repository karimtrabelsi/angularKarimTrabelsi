import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProduitModule {
  idProduit !: number;
code!:string;
libelle!:string;
prixUnitaire!:number;
tauxTVA!:number;
 }
