import { Categorie } from './../model/categorie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chanteur } from '../model/chanteur.model';
import { ChanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-update-chanteur',
  templateUrl: './update-chanteur.component.html',
  styles: []
})
export class UpdateChanteurComponent implements OnInit {
  currentChanteur = new Chanteur();
  categories: Categorie[] = [];
  updatedHipHopId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private chanteurService: ChanteurService
  ) {}

  ngOnInit(): void {
    this.chanteurService.listeCategories().subscribe(cats => {this.categories = cats._embedded.categories;
console.log(cats);
});

    this.chanteurService.consulterChanteur(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentChanteur = prod; 
      this.updatedHipHopId =this.currentChanteur.categorie.idHipHop;
    } ) ;
   
   }

   updateChanteur() {
    if (!this.categories || this.categories.length === 0) {
      console.error('Categories are not loaded yet.');
      return;
    }
  
    const selectedCategory = this.categories.find(cat => cat.idHipHop == this.updatedHipHopId);
  
    if (!selectedCategory) {
      console.error('Category with idHipHop', this.updatedHipHopId, 'not found.');
      return;
    }
  
    this.currentChanteur.categorie = selectedCategory;
  
    this.chanteurService.updateChanteur(this.currentChanteur).subscribe(() => {
      this.router.navigate(['chanteurs']);
    });
  }
  
}
