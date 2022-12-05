import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
listAccount!:Account[]
  constructor(private http:HttpClient, private service:AccountService) { }

  ngOnInit(): void {
    this.service.fetchAccounts().subscribe(
      (d) => {
        this.listAccount= d;
      }
    )
  }


}
