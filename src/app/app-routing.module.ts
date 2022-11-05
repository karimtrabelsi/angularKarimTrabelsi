import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListProduitsComponent } from './components/list-produits/list-produits.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddProductComponent } from './components/produit/add-product/add-product.component';
import { ShowProductComponent } from './components/produit/show-product/show-product.component';
import { UpdateProductComponent } from './components/produit/update-product/update-product.component';
import { ProviderComponent } from './components/provider/provider.component';

const routes: Routes = [
  
    
    {path:"addP",component:AddProductComponent},
    {path:"updateP",component:UpdateProductComponent},
    {path:"userC",component:ListUserComponent},
    {path:"productC",component:ListProduitsComponent},
    {path:"providerC",component:ProviderComponent},
    {path:"**",component:NotfoundComponent}
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
