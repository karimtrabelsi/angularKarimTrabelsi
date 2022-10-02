import { Component, OnInit } from '@angular/core';
import { ProduitModule } from 'src/app/model/produit/produit.module';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
produits:ProduitModule[]=[
  {idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02},
  {idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980},
  {idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
  {idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
  {idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02},
  ]
textShow=false;
prod: string = '';
id!: number;
code: string = '';
libelle: string = '';
prix!: number;
tva!: number;

  constructor() { }

  ngOnInit(): void {
  }
changeKlass(){
    if(this.produits[0].tauxTVA==0.1){
      return 'true'
    }
    else
    return 'false'
  }
  changeKolor(id:any){
    let index=this.produits.indexOf(id);

    if(this.produits[index].prixUnitaire<=50){
    return 'kk' }
    else 
    return ''
  
  }
  showText(id:any){
    let index=this.produits.indexOf(id);
    this.textShow = true;
    this.produits[index].tauxTVA=0.02;
   }
   hideText(){
    this.textShow = false;
   }
   addNew(){
    this.produits.push({idProduit:this.id,code:this.code,libelle:this.libelle,prixUnitaire:this.prix,tauxTVA:this.tva })
   }
   
}
