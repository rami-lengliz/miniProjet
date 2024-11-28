import { Categorie } from './../model/categorie.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.chanteurService.listeCategories().
    subscribe(chant => {this.categories = chant._embedded.categories;
    console.log(chant);
    });  } 

  addChanteur(){
    this.newChanteur.categorie = this.categories.find(cat => cat.idHipHop == this.newIdHipHop)!;
    this.chanteurService.ajouterChanteur(this.newChanteur).subscribe(prod => {
    console.log(prod);
    this.router.navigate(['chanteurs']);
    });

}
}
