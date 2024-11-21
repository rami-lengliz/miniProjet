import { Component,EventEmitter,Output,Input,OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styles: ``
})
export class UpdateCategorieComponent implements OnInit{
    
  @Input()
  music! : Categorie;

  @Output()
  musicUpdated = new EventEmitter<Categorie>();
  

  @Input()
  ajout!:boolean;
  
  constructor() {}
  ngOnInit(): void {
    console.log("ngOnInit du composant Updatemusci ",this.music);
  }
  saveMusic() {
    this.musicUpdated.emit(this.music);
  }
  
}

