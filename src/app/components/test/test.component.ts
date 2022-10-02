import { Component, OnInit } from '@angular/core';
import { FournisseurModule } from 'src/app/model/fournisseur/fournisseur.module';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
test="4twin6";
kolor="red";
name!:string;
products:FournisseurModule[]=[
  {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
  {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
  {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
  {idFournisseur:400,code:"40ABC452",libelle:"asus"}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  showMsg() {
    console.log('bonjour')
  }
  getColor(){
    if(this.kolor=='red'){
      this.kolor='pink'
    }
    return this.kolor;
  }
  changeKlass(){
    if(this.products[0].libelle=='hp'){
      return 'btn btn-success'
    }
    else
    return 'btn btn-danger'
  }
}
