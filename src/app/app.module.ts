import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ListProduitsComponent } from './components/list-produits/list-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ListUserComponent,
    ListProduitsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
