import { VolService } from 'src/app/services/vol.service';
import { Aeroport } from './../model/aeroport.model';
import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { ActivatedRoute ,Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-recherche-par-aeroport',
  templateUrl: './recherche-par-aeroport.component.html',
  styleUrls: ['./recherche-par-aeroport.component.css']
})
export class RechercheParAeroportComponent implements OnInit {
  vols! : Vol[];
  IdAeroport! : number;
  aeroports! : Aeroport[];
  
  constructor(private volService: VolService,
    private route: ActivatedRoute,
    private router: Router) { 

  }

  ngOnInit(): void {
    this.volService.listeAeroports().
    subscribe(airs => {this.aeroports = airs._embedded.aeroports;
      console.log(airs);
});
  }
  onChange() {
    this.volService.rechercherParAeroport(this.IdAeroport).
    subscribe(prods =>{this.vols=prods});
    console.log (this.vols);
    }

/*chargerVols(){
      this.volService.listeVol().subscribe(v => {
      console.log(v);
      this.vols = v;
      }); 
      }
    supprimerVol(v: Vol)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.volService.supprimerVol(v.idVol).subscribe(() => {
    console.log("produit supprimé");
    this.chargerVols();
    });  }*/
}
