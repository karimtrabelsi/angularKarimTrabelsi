import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from '../model/invoice';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  url=environment.baseUrl+'invoices/'
  constructor(private http:HttpClient) { }

  fetchInvoices(){
    return this.http.get<Invoice>(this.url)
  }
  addInvoice(d:any){
return this.http.post(this.url,d)
  }
  updateInvoice(id:any,data:any){
    return this.http.put(this.url+id,data)
  }
  findById(id:any){
    return this.http.get(this.url+id)
  }
  removeInvoice (invoice: Invoice): Observable<Invoice> {
    const url=this.url+invoice.idInvoice;
    return this.http.delete<Invoice>(url);
    }

}
