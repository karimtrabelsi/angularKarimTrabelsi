import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  fetchAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.url+"accounts")
  }

}
