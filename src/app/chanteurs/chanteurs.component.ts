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

  constructor(
    private chanteurService: ChanteurService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerChanteurs();
  }

  chargerChanteurs(): void {
    this.chanteurService.listeChanteur().subscribe(
      (chant) => {
        console.log('Chanteurs loaded:', chant);
        this.chanteurs = chant;
      },
      (error) => {
        console.error('Error loading chanteurs:', error);
      }
    );
  }

  supprimerChanteur(p: Chanteur): void {
    const conf = confirm('Etes-vous sûr de vouloir supprimer ce chanteur ?');
    if (conf && p.idChanteur !== undefined) {
      this.chanteurService.supprimerChanteur(p.idChanteur).subscribe(
        () => {
          console.log('Chanteur supprimé:', p.nomChanteur);
          this.chargerChanteurs(); // Refresh the list after deletion
        },
        (error) => {
          console.error('Error deleting chanteur:', error);
        }
      );
    }
  }
}
