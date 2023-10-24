import { Aeroport } from './../model/aeroport.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { VolService } from 'src/app/services/vol.service';
import { Vol } from '../model/vol.model';
import {Image } from '../model/image.model';
@Component({
  selector: 'app-update-vol',
  templateUrl: './update-vol.component.html',
  styleUrls: ['./update-vol.component.css']
})
export class UpdateVolComponent implements OnInit {
  currentVol = new Vol();
  aeroports!:Aeroport[];
  updatedAirId!:number;
  myImage! : string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false;

  constructor(private activatedRoute: ActivatedRoute,private router :Router,private volService: VolService){}
  //ngOnInit():void{
    /*this.aeroports = this.volService.listeAeroports();
this.currentVol =
this.volService.consulterVol(this.activatedRoute.snapshot.params['id']);
this.updatedAirId=this.currentVol.aeroport.idAir;*/
  //}
  /*ngOnInit() {
    this.volService.consulterVol(this.activatedRoute.snapshot.params['id']).
     subscribe( v =>{ this.currentVol = v; } ) ;
    }*/

    /*ngOnInit(): void {
      this.volService.listeAeroports().
      subscribe(airs => {this.aeroports = airs;
      console.log(airs);
      });
      this.volService.consulterVol(this.activatedRoute.snapshot.params['id']).
      subscribe( v =>{ this.currentVol = v; 
      this.updatedAirId = this.currentVol.aeroport.idAir;
      } ) ;
      }*/
      // ngOnInit(): void {
      //   this.volService.listeAeroports().
      //   subscribe(cats => {console.log(cats);
      //   this.aeroports = cats._embedded.aeroports;
      //   }
      //   );
      //   this.volService.consulterVol(this.activatedRoute.snapshot.params['id']).
      //   subscribe( prod =>{ this.currentVol = prod; 
      //   this.updatedAirId = this.currentVol.aeroport.idAir;
      //   this.volService
      //   .loadImage(this.currentVol.image.idImage)
      //   .subscribe((img: Image) => {
      //   this.myImage = 'data:' + img.type + ';base64,' + img.image;
      //   }); 
      //   } ) ;}
      
      ngOnInit(): void {
        this.volService.listeAeroports().
        subscribe(cats => {this.aeroports = cats._embedded.aeroports;
        });
        this.volService.consulterVol(this.activatedRoute.snapshot.params['id'])
        .subscribe( prod =>{ this.currentVol = prod;
        this.updatedAirId = prod.aeroport.idAir;
        } ) ;
        }
        
  //updateVol(){ 
    /*
    this.currentVol.aeroport=this.volService.consulterAeroport(this.updatedAirId);
    this.volService.updateVol(this.currentVol);
    this.router.navigate(['vols']);*/
  //}
  /*updateVol() {
    this.volService.updateVol(this.currentVol).subscribe(v => {
    this.router.navigate(['vols']); }
    );
    }*/
    // updateVol() {
    //   this.currentVol.aeroport = this.aeroports.
    //    find(air => air.idAir == this.updatedAirId)!;
    //   this.volService.updateVol(this.currentVol).subscribe(v => {
    //   this.router.navigate(['vols']); }
    //   );
    //   }


    // updateVol() {
    //   this.currentVol.aeroport = this.aeroports.find(air => air.idAir == 
    //   this.updatedAirId)!;
    //   //tester si l'image du produit a été modifiée
    //   if (this.isImageUpdated)
    //   { 
    //   this.volService
    //   .uploadImage(this.uploadedImage, this.uploadedImage.name)
    //   .subscribe((img: Image) => {
    //   this.currentVol.image = img;
    //   this.volService
    //   .updateVol(this.currentVol)
    //   .subscribe((v) => {
    //   this.router.navigate(['vols']);
    //   });
    //   });
    //   }
    //   else{ 
    //   this.volService
    //   .updateVol(this.currentVol)
    //   .subscribe((v) => {
    //   this.router.navigate(['vols']);
    //   });
    //   }
    //   }
      
      onImageUpload(event: any) {
        if(event.target.files && event.target.files.length) {
        this.uploadedImage = event.target.files[0];
        this.isImageUpdated =true;
        const reader = new FileReader();
        reader.readAsDataURL(this.uploadedImage);
        reader.onload = () => { this.myImage = reader.result as string; };
        }
        }
        onAddImageVol() {
          this.volService
          .uploadImageVol(this.uploadedImage, 
          this.uploadedImage.name,this.currentVol.idVol)
          .subscribe( (img : Image) => {
          this.currentVol.images.push(img);
          });
          }

          supprimerImage(img: Image){
            let conf = confirm("Etes-vous sûr ?");
            if (conf)
            this.volService.supprimerImage(img.idImage).subscribe(() => {
            //supprimer image du tableau currentProduit.images 
            const index = this.currentVol.images.indexOf(img, 0);
            if (index > -1) {
            this.currentVol.images.splice(index, 1);
            }
            });
            }
            updateVol() {
              this.currentVol.aeroport = this.aeroports.find(cat => cat.idAir == 
              this.updatedAirId)!; 
              this.volService
              .updateVol(this.currentVol)
              .subscribe((v) => {
              this.router.navigate(['vols']);
              });
              } 
              
      
}
