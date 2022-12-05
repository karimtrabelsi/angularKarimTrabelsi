import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ListProduitsComponent } from './components/list-produits/list-produits.component';
//import { AddProductComponent } from './components/produit/add-product/add-product.component';
import { AddProductComponent } from './examen/add-product/add-product.component';
import { UpdateProductComponent } from './components/produit/update-product/update-product.component';
import { ShowProductComponent } from './components/produit/show-product/show-product.component';
import { NavbarComponent } from './components/produit/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProviderComponent } from './components/provider/provider.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListAccountComponent } from './components/account/list-account/list-account.component';
import { AccountComponent } from './components/account/account/account.component';
import { ErrorsComponent } from './examen/errors/errors.component';

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
    HomeComponent,
    ListAccountComponent,
    AccountComponent,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
