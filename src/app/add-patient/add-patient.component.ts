import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { Medecin } from '../model/medecin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit{
  newPatient=new Patient();
  medecins! : Medecin[];
newIdMedecin! : number;
newMedecin! : Medecin;

  constructor(private patientService: PatientService,
    private router :Router){}
    addPatient(){
      this.newPatient.medecin = this.medecins.find(med => med.idMedecin == this.newIdMedecin)!;
      this.patientService.ajouterPatient(this.newPatient)
      .subscribe(pat => {
      console.log(pat);
      this.router.navigate(['patients']);
      });
      }
      
  ngOnInit(): void {
    this.patientService.listeMedecins().
    subscribe(meds => {console.log(meds);
    this.medecins = meds._embedded.medecins;
    }
    );
    
  }
}
