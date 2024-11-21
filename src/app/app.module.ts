import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChanteursComponent } from './chanteurs/chanteurs.component';
import { AddChanteurComponent } from './add-chanteur/add-chanteur.component';
import { UpdateChanteurComponent } from './update-chanteur/update-chanteur.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';  // Add this import

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ChanteursComponent,
    AddChanteurComponent,
    UpdateChanteurComponent,
    LoginComponent,
    RechercheParCategorieComponent,
    ForbiddenComponent,
    ListeCategoriesComponent,
    UpdateCategorieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,  
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
