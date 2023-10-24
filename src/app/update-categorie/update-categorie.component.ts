import { Aeroport } from './../model/aeroport.model';
import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  @Input()
  aeroport!:Aeroport;

  @Output()
  aeroportUpdated = new EventEmitter<Aeroport>();

  @Input()
  ajout!:boolean;
 

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateAeroport ",this.aeroport);
    }

    saveAeroport(){
      this.aeroportUpdated.emit(this.aeroport);
    }
}
