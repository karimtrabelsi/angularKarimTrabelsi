import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ListProduitsComponent } from './components/list-produits/list-produits.component';
import { AddProductComponent } from './components/produit/add-product/add-product.component';
import { UpdateProductComponent } from './components/produit/update-product/update-product.component';
import { ShowProductComponent } from './components/produit/show-product/show-product.component';
import { NavbarComponent } from './components/produit/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProviderComponent } from './components/provider/provider.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ListUserComponent,
    ListProduitsComponent,
    AddProductComponent,
    UpdateProductComponent,
    ShowProductComponent,
    NavbarComponent,
    NotfoundComponent,
    ProviderComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
