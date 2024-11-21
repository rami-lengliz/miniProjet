import { Categorie } from './../model/categorie.model';
import { Component, OnInit } from '@angular/core';
import { ChanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styles: ``
})
export class ListeCategoriesComponent implements OnInit {

  music!: Categorie[];
  updatedmusic: Categorie = { "idHipHop": 0, "nomHipHop": "" };
  ajout:boolean=true;

  constructor(private chanteurService: ChanteurService) { }

  ngOnInit(): void {
    this.chargerMusics();
  }
  chargerMusics() {
    this.music = this.chanteurService.listeMusics();
  }
  musicUpdated(gen: Categorie) {
    this.chanteurService.ajouterMusic(gen);
    this.chargerMusics();
  }

  editMusic(gen: Categorie) {
    this.updatedmusic = gen;
    this.ajout=false;
  }
}