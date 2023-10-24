import { Aeroport } from './../model/aeroport.model';
import { Component, OnInit } from '@angular/core';
import { VolService } from '../services/vol.service';

@Component({
  selector: 'app-liste-aeroports',
  templateUrl: './liste-aeroports.component.html',
  styleUrls: ['./liste-aeroports.component.css']
})
export class ListeAeroportsComponent implements OnInit {

 aeroports!:Aeroport[];
 updatedAir:Aeroport = {
   "idAir": 0, "nomAir": "",
   "adresseAir": ""
 };
  ajout: boolean=true;


  constructor(private volService : VolService) { }

  ngOnInit(): void {
    this.chargerAeroports();
}

    aeroportUpdated(air:Aeroport){
      console.log("Air updated event",air);
      this.volService.ajouterAeroport(air).
      subscribe( ()=> this.chargerAeroports());
    }

    chargerAeroports(){
      this.volService.listeAeroports().
      subscribe(cats => {this.aeroports = cats._embedded.aeroports;
      console.log(cats);
      });
      }

      updateAir(air:Aeroport) {
        this.updatedAir=air;
        this.ajout=false; 
        }


    






}
