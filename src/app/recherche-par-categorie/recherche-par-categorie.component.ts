import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Chanteur } from '../model/chanteur.model';
import { ChanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: []
})
export class RechercheParCategorieComponent implements OnInit {
  chanteurs!: Chanteur[];
  categories!: Categorie[];
  IdCategorie!: number;  // Define the missing property here

  constructor(private chanteurService: ChanteurService) {}

  ngOnInit(): void {
    // Initialize categories and chanteurs
    //this.categories = this.chanteurService.listeCategories();
   // this.chanteurs = this.chanteurService.listeChanteur();
  }

  onChange() {
    // Make sure IdCategorie is being used consistently
    if (this.IdCategorie) {
      this.chanteurs = this.chanteurService.rechercherParCategorie(this.IdCategorie);
    }
  }

  supprimerChanteur(chant: Chanteur) {
    /*let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.chanteurService.supprimerChanteur(p);
      this.chanteurs = this.chanteurService.rechercherParCategorie(this.IdCategorie);
    }*/
  }
}
