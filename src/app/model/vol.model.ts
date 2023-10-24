import { Aeroport } from "./aeroport.model";
import { Image } from "./image.model";
export class Vol {
    idVol!:number;
    numVol! : String;
    agence! : string;
    heureDepart! : Date ;
    destination!:string;
    etat!:string;
    aeroport!:Aeroport;
    image! : Image;
    imageStr!:string;
    images!: Image[];
    }

