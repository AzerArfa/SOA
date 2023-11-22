import { Medecin } from "./medecin.model";

export class Patient {
    idPatient!: number;
    nomprenomP! : string;
    age! : number;
     maladie! : string ;
     adresseP! : string;
     medecin!: Medecin;
    }
 