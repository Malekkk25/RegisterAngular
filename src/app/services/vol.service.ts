
import { Injectable } from '@angular/core';
import { Vol } from 'src/app/model/vol.model';
import { Image } from 'src/app/model/image.model';
import { Aeroport } from '../model/aeroport.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AeroportWrapper } from '../model/AeroportWrapped.model';
import { AuthService } from './auth.service';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class VolService {
  apiURL: string = 'http://localhost:8888/vols/api';
  apiURLAir: string = 'http://localhost:8888/vols/air';

  vols: Vol[] = [];

  constructor(private http:HttpClient , 
    private authService: AuthService) { 
    /*this.aeroports=[
      {idAir:1,adresseAir:"Tunis",nomAir:"TunisCartage"},
      {idAir:2,adresseAir:"Hammamet",nomAir:"Enfidha"}
    ]
    this.vols = [
      {idVol : "TU283", agence: "Tunisair", destination: "Toulouse", Depart: "12:15",etat:"A atteri",aeroport:{idAir:1,adresseAir:"Tunis",nomAir:"TunisCartage"}},
      {idVol : "BJ515", agence: "Nouvelair", destination: "Toulouse", Depart: "13:40",etat:"a la porte dembarquement",aeroport:{idAir:2,adresseAir:"Hammamet",nomAir:"Enfidha"}},
      {idVol : "TU745", agence: "Tunisair", destination: "Bruxelles International", Depart: "14:50",etat:"annule",aeroport:{idAir:1,adresseAir:"Tunis",nomAir:"TunisCartage"}}
    ];*/
  }
 /*listeVols():Vol[]{
    return this.vols;
  }*/
  
  // listeVol(): Observable<>{
  //   return this.http.get<Vol[]>(this.apiURL);
  //   }  

  listeVol(): Observable<Vol[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Vol[]>(this.apiURL+"/all");
    }
    
/*ajouterVol(v:Vol){
  this.vols.push(v);
}*/

ajouterVol( v: Vol):Observable<Vol>{
  // return this.http.post<Vol>(this.apiURL, v, httpOptions);
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
  return this.http.post<Vol>(this.apiURL+"/addvol", v, {headers:httpHeaders});
  }
  


/*supprimerVol( prod: Vol){
  
  const index = this.vols.indexOf(prod, 0);
  if (index > -1) {
  this.vols.splice(index, 1);
  }}*/
  supprimerVol(id : number) {
    // const url = `${this.apiURL}/${id}`;
    // return this.http.delete(url, httpOptions);
    const url = `${this.apiURL}/delvol/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.delete(url, {headers:httpHeaders});
    }


    
 /*consulterVol(id:string):Vol{
  this.vol=this.vols.find(p => p.idVol ==id)!;
  return this.vol;
 }*/
 /*updateVol(v:Vol)
{
this.supprimerVol(v);
this.ajouterVol(v);
}*/

updateVol(v :Vol) : Observable<Vol>
{
// return this.http.put<Vol>(this.apiURL, v, httpOptions);
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
return this.http.put<Vol>(this.apiURL+"/updatevol", v, {headers:httpHeaders});

}

consulterVol(id: number): Observable<Vol> {
  // const url = `${this.apiURL}/${id}`;
  // return this.http.get<Vol>(url);
  const url = `${this.apiURL}/getbyid/${id}`;
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
  return this.http.get<Vol>(url,{headers:httpHeaders});
  }

/*listeAeroports():Aeroport[] {
  return this.aeroports;
  }*/
  /*listeAeroports():Observable<Aeroport[]>{
    return this.http.get<Aeroport[]>(this.apiURL+"/air");
    }*/
    listeAeroports():Observable<AeroportWrapper>{
      // return this.http.get<AeroportWrapper>(this.apiURLAir);
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<AeroportWrapper>(this.apiURLAir,{headers:httpHeaders});
  
    }


/*consulterAeroport(id:number): Aeroport{
    return this.aeroports.find(air => air.idAir == id)!;
    } */ 

    rechercherParAeroport(idAir: number):Observable< Vol[]> {
      // const url = `${this.apiURL}/vair/${idAir}`;
      // return this.http.get<Vol[]>(url);
      const url = `${this.apiURL}/vair/${idAir}`;
      return this.http.get<Vol[]>(url);

      }  
      
      rechercherParDestination(destination: string):Observable< Vol[]> {
        // const url = `${this.apiURL}/vByDestination/${destination}`;
        // return this.http.get<Vol[]>(url);
        const url = `${this.apiURL}/vByDestination/${destination}`;
        return this.http.get<Vol[]>(url);

        }

        ajouterAeroport( air: Aeroport):Observable<Aeroport>{
          return this.http.post<Aeroport>(this.apiURLAir,air, httpOptions);
          }  
        
          uploadImage(file: File, filename: string): Observable<Image>{
            const imageFormData = new FormData();
            imageFormData.append('image', file, filename);
            const url = `${this.apiURL + '/image/upload'}`;
            return this.http.post<Image>(url, imageFormData);
            }
            loadImage(id: number): Observable<Image> {
            const url = `${this.apiURL + '/image/load'}/${id}`;
            return this.http.get<Image>(url);
            }

            uploadImageVol(file: File, filename: string, idProd:number): Observable<any>{
              const imageFormData = new FormData();
              imageFormData.append('image', file, filename);
              const url = `${this.apiURL + '/image/uplaodImageProd'}/${idProd}`;
              return this.http.post(url, imageFormData);
              }
              supprimerImage(id : number) {
              const url = `${this.apiURL}/image/delete/${id}`;
              return this.http.delete(url, httpOptions);
              }
              
              uploadImageFS(file: File, filename: string, idProd : number): Observable<any>{
                const imageFormData = new FormData();
                imageFormData.append('image', file, filename);
                const url = `${this.apiURL + '/image/uploadFS'}/${idProd}`;
                return this.http.post(url, imageFormData);
                }
                      
                
}
