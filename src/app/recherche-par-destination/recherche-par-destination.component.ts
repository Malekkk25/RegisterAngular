import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vol } from '../model/vol.model';
import { VolService } from '../services/vol.service';

@Component({
  selector: 'app-recherche-par-destination',
  templateUrl: './recherche-par-destination.component.html',
  styleUrls: ['./recherche-par-destination.component.css'],
})
export class RechercheParDestinationComponent implements OnInit {
  searchTerm!: any;
  allVols!: Vol[]; // Initialize allVols array
  destinationVol!: any;
  vols!: Vol[];

  constructor(private volService: VolService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.volService.listeVol().subscribe((prods) => {
      console.log(prods);
      this.allVols = prods; // Initialize allVols with the data
      this.vols = prods;
    });
  }

  rechercherVols() {
    this.volService.rechercherParDestination(this.destinationVol).subscribe((prods) => {
      this.vols = prods;
      console.log(prods);
    });
  }

  onKeyUp(filterText: string) {
    if (this.allVols) {
      this.vols = this.allVols.filter((item) =>
        item.destination.toLowerCase().includes(filterText.toLowerCase())
      );
    }
  }
}
