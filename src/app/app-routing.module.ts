import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChanteursComponent } from './chanteurs/chanteurs.component';
import { UpdateChanteurComponent } from './update-chanteur/update-chanteur.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { LoginComponent } from './login/login.component';
import { AddChanteurComponent } from './add-chanteur/add-chanteur.component';
import { BindingComponent } from './binding/binding.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProduitGuard } from './chanteur.guard';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';


const routes: Routes = [{path: "chanteurs", component : ChanteursComponent},
{ path: 'add-chanteur', component: AddChanteurComponent, canActivate:[ProduitGuard] },
{ path: 'test', component: BindingComponent },

{path: "updateChanteur/:id", component: UpdateChanteurComponent},
{path: 'login', component: LoginComponent},
{path: "rechercheParCategorie", component : RechercheParCategorieComponent},
{path: "listeCategories", component : ListeCategoriesComponent},
{path: 'app-forbidden', component: ForbiddenComponent},

{ path: "", redirectTo: "chanteurs", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
