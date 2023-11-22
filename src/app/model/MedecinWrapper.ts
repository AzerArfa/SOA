import { Medecin } from "./medecin.model";

export class MedecinWrapper{
_embedded!: { medecins: Medecin[]};
}