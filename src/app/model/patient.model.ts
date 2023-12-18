import { Medecin } from "./medecin.model";
import { Image } from "./image.model";
export class Patient {
    idPatient!: number;
    nomprenomP! : string;
    age! : number;
     maladie! : string ;
     adresseP! : string;
     medecin!: Medecin;
     image! : Image
     images!: Image[];
imageStr!:string
    }
 