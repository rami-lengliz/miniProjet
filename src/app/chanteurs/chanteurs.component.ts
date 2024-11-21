import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chanteur } from '../model/chanteur.model';
import { AuthService } from '../services/auth.service';
import { ChanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-chanteurs',
  templateUrl: './chanteurs.component.html',
  styleUrls: ['./chanteurs.component.css']
})
export class ChanteursComponent implements OnInit {
  chanteurs: Chanteur[] = [];

  constructor(private chanteurService: ChanteurService,
    private router:Router, 
    public authService: AuthService) {}
    
  ngOnInit(): void {
    this.chanteurs = this.chanteurService.listeChanteurs();
  }
  supprimerChanteur(p: Chanteur)
{
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.chanteurService.supprimerChanteur(p);
}
}
