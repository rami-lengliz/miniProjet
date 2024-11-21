import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { Chanteur } from '../model/chanteur.model';
import { ChanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-add-chanteur',
  templateUrl: './add-chanteur.component.html'
})
export class AddChanteurComponent implements OnInit {

  newChanteur = new Chanteur();
  categories!: Categorie[];
  newIdHipHop!: number;
  newCategorie!: Categorie;

  message: string = "";

  constructor(private chanteurService: ChanteurService, private router: Router) { }

  ngOnInit(): void {
    this.categories = this.chanteurService.listeCategories();
  } 

  addChanteur() {
    this.newCategorie = this.chanteurService.consulterCategorie(this.newIdHipHop);
    this.newChanteur.categorie = this.newCategorie;
    this.chanteurService.ajouterChanteur(this.newChanteur);

    this.router.navigate(['/add-chanteur']);

    this.message = 'Chanteur ajouté avec succès!';
  }

}
