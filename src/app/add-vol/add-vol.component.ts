import { Router } from '@angular/router';
import { VolService } from '../services/vol.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { Image } from '../model/image.model';
import { Aeroport } from '../model/aeroport.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',
  styleUrls: ['./add-vol.component.css']
})
export class AddVolComponent implements OnInit {
newVol= new Vol();
 aeroports!: Aeroport[];
newIdAir!: number;
newAeroport!:Aeroport;
uploadedImage!: File;
imagePath: any;

  constructor(private volService: VolService,private router:Router) { }

  //addVol(){
/*this.newAeroport=this.VolService.consulterAeroport(this.newIdAir);
this.newVol.aeroport=this.newAeroport;
this.VolService.ajouterVol(this.newVol);
this.router.navigate(['vols']);*/
//}

/*addVol(){
  this.volService.ajouterVol(this.newVol)
  .subscribe(v => {
  console.log(v);
  this.router.navigate(['vols']);
  });
  }*/
  // addVol(){
  //   this.newVol.aeroport = this.aeroports.find(air => air.idAir == this.newIdAir)!;
  //   this.volService.ajouterVol(this.newVol)
  //   .subscribe(v => {
  //   console.log(v);
  //   this.router.navigate(['vols']);
  //   });
  //   }
  // addVol(){
  //   this.volService
  //   .uploadImage(this.uploadedImage, this.uploadedImage.name)
  //   .subscribe((img: Image) => {
  //   this.newVol.image=img;
  //   this.newVol.aeroport = this.aeroports.find(air => air.idAir
  //   == this.newIdAir)!;
  //   this.volService
  //   .ajouterVol(this.newVol)
  //   .subscribe(() => {
  //   this.router.navigate(['vols']);
  //   });
  //   });
  //   }
    
  addVol(){
    this.newVol.aeroport = this.aeroports.find(cat => cat.idAir
    == this.newIdAir)!;
    this.volService
    .ajouterVol(this.newVol)
    .subscribe((prod) => {
    this.volService
    .uploadImageFS(this.uploadedImage, 
    this.uploadedImage.name,prod.idVol)
    .subscribe((response: any) => {}
    );
    this.router.navigate(['vols']);
    });
    }
 /* ngOnInit(): void {
   /* this.aeroports=this.VolService.listeAeroports();*/
  //}
  /*ngOnInit(): void {
    this.volService.listeAeroports().
    subscribe(airs => {this.aeroports = airs;
    console.log(airs);
    });
    }*/
    ngOnInit(): void {
      this.volService.listeAeroports().
      subscribe(airs => {console.log(airs);
      this.aeroports = airs._embedded.aeroports;
      }
      );
      }

      onImageUpload(event: any) {
        this.uploadedImage = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.uploadedImage);
        reader.onload = (_event) => { this.imagePath = reader.result; }
        }
}
