import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/model/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  invoices!:any
  id: any;
  constructor(private service:InvoiceService,private router:Router,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.fetchInvoices().subscribe(
      (d)=> {
        console.log(d);
        this.invoices=d;
      }
     
      
    )
  }

  addInvoice(f:any){
    this.service.addInvoice(f).subscribe(
      ()=>{
        this.router.navigate([this.router.url])
      }
    )
      }

      delete(i:Invoice) {
      
        this.service.removeInvoice(i).subscribe();
      }
}
