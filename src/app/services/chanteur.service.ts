import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Chanteur } from '../model/chanteur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { CategorieWrapper } from '../model/catgorieWrapped.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )

};
@Injectable({
  providedIn: 'root'
})
export class ChanteurService {
  apiURLCat: string = 'http://localhost:8086/chanteurs/api/cat'
  

  chanteurs!: Chanteur[];
  categories!: Categorie[];
  chanteursRecherche!: Chanteur[];

  constructor(private http : HttpClient) { 
    /*this.categories=[
      {idHipHop:1, nomHipHop:"aaa"},
      {idHipHop:1, nomHipHop:"bbb"},
      {idHipHop:1, nomHipHop:"gg"}
    ];

    this.chanteurs = [
      {idChanteur: 1, nomChanteur: "50 Cent", prixChanteur: 500000, datenais: new Date("2011-01-14") , categorie :{idHipHop:1, nomHipHop:"aaa"}},
      {idChanteur: 2, nomChanteur: "Drake", prixChanteur: 450000, datenais: new Date("2010-12-17") ,categorie :{idHipHop:2, nomHipHop:"bbb"}},
      {idChanteur: 3, nomChanteur: "Diddy", prixChanteur: 900000, datenais: new Date("2020-02-20"),categorie :{idHipHop:3, nomHipHop:"gg"}}
    ];*/
  }

  
  listeChanteur(): Observable<Chanteur[]>{
    return this.http.get<Chanteur[]>(apiURL);
    }

    ajouterChanteur( prod: Chanteur):Observable<Chanteur>{
      return this.http.post<Chanteur>(apiURL, prod, httpOptions);
      }
       supprimerChanteur(id : number) {
        const url = `${apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }
        
        consulterChanteur(id: number): Observable<Chanteur> {
          const url = `${apiURL}/${id}`;
          return this.http.get<Chanteur>(url);
          }
    
        trierChanteurs(){
          this.chanteurs = this.chanteurs.sort((n1,n2) => {
          if (n1.idChanteur! > n2.idChanteur!) {
          return 1;
          } 
          if (n1.idChanteur! < n2.idChanteur!) {
          return -1;
          }
          return 0;
          });
          }
          updateChanteur(prod :Chanteur) : Observable<Chanteur>
        {
              return this.http.put<Chanteur>(apiURL, prod, httpOptions);
      }

      listeCategories():Observable<CategorieWrapper>{
        return this.http.get<CategorieWrapper>(this.apiURLCat);
        }
        
            consulterCategorie(id:number): Categorie{
            return this.categories.find(HipHop => HipHop.idHipHop == id)!;
            }
            rechercherParCategorie(idHipHop: number): Chanteur[]{
              this.chanteursRecherche = [];
              this.chanteurs.forEach((cur, index) => {
              if(idHipHop == cur.categorie.idHipHop) {
              console.log("cur "+cur);
              this.chanteursRecherche.push(cur);
              }
              });
              return this.chanteursRecherche;
              }
              ajouterMusic(g: Categorie) {
                const id = this.categories.length +1
                g.idHipHop=id;
                this.categories.push({...g}); 
                 return g;
              }
              listeMusics(): Categorie[] {
                return this.categories;
              }
        }
          
    

