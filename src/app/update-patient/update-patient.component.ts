import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Medecin } from '../model/medecin.model';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styles: []
})
export class UpdatePatientComponent implements OnInit{
  currentPatient = new Patient();
  medecins! : Medecin[];
updatedMedecinId? : number;

  constructor(private activatedRoute: ActivatedRoute,private router :Router,
    private patientService: PatientService)
  {
  }
  ngOnInit() {
    this.patientService.consulterPatient(this.activatedRoute.snapshot.params['id']).
    subscribe( pat =>{ this.currentPatient = pat; this.updatedMedecinId=this.currentPatient.medecin?.idMedecin } ) ;
    
    this.patientService.listeMedecins().
    subscribe(meds => {this.medecins = meds._embedded.medecins;
      console.log(meds);
  });
   
    }
    updatePatient() {
      this.currentPatient.medecin = this.medecins.
       find(med => med.idMedecin == this.updatedMedecinId)!;
      this.patientService.updatePatient(this.currentPatient).subscribe(pat => {
      this.router.navigate(['patients']); }
      );
      }
      
      
}
