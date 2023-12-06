import { Component, OnInit } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-liste-medecins',
  templateUrl: './liste-medecins.component.html',
  styleUrls: ['./liste-medecins.component.css']
})
export class ListeMedecinsComponent implements OnInit {
 medecins!: Medecin[];
 updatedMed:Medecin = {
   "idMedecin": 0, "nomprenomM": "",
   adresseM: ''
 };
 ajout:boolean=true;

 constructor(private patientService : PatientService){}
  ngOnInit(): void {
    this.patientService.listeMedecins().
subscribe(meds => {this.medecins = meds._embedded.medecins;
console.log(meds);
});
    
  }
  medecinUpdated(med:Medecin){
    console.log("Medecin updated event",med);
    this.patientService.ajouterMedecin(med).
     subscribe( ()=> this.chargerMedecins());
    }
    chargerMedecins(){
      this.patientService.listeMedecins().
      subscribe(meds => {this.medecins = meds._embedded.medecins;
      console.log(meds);
      });
      }
      updateMed(med:Medecin) {
        this.updatedMed=med;
        this.ajout=false; 
        }
}
