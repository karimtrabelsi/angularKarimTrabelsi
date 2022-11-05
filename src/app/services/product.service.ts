import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { ProduitModule } from '../model/produit/produit.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  Product=[
    { idProduit: 2, code: "128",libelle: "TV", prixUnitaire : 1000, tauxTVA :20},
    { idProduit: 3, code: "128",libelle: "Table", prixUnitaire : 200, tauxTVA :30},
    { idProduit: 1, code: "127",libelle: "PC", prixUnitaire : 2000, tauxTVA :10},
  ]


  
  getAllProducts():Observable<ProduitModule[]>{
    const listproduct= of(this.Product)
    return listproduct;
  }

  getNbProductsByLibelle(libelle:string):Observable<number>{
    const samelib=[]
    for (let i of this.Product){
      if (i.libelle === libelle){
        samelib.push(i);
      }

    }
    
    return of(samelib.length);
  }
  }
