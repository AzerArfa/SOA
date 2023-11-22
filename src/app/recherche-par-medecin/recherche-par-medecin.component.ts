import { Component, OnInit } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-recherche-par-medecin',
  templateUrl: './recherche-par-medecin.component.html',
  styleUrls: ['./recherche-par-medecin.component.css']
})
export class RechercheParMedecinComponent implements OnInit {
  patients! : Patient[];
  IdMedecin! : number;
  medecins! : Medecin[];

  constructor(private patientService : PatientService){

  }
  ngOnInit(): void {
    this.patientService.listeMedecins().
    subscribe(meds => {this.medecins = meds._embedded.medecins;
    console.log(meds);
  });
    }
    onChange() {
      this.patientService.rechercherParMedecin(this.IdMedecin).
        subscribe(pats =>{this.patients=pats});
  
      }
    
}
