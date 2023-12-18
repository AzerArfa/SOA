import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{
  patients : Patient[];
  constructor(private patientService: PatientService,
    public authService: AuthService) {
    this.patients= [];

      
    }
    chargerPatients() {
      this.patientService.listePatients().subscribe(pats => {
        this.patients = pats;
        this.patients.forEach((pat) => {
        pat.imageStr = 'data:' + pat.images[0].type + ';base64,' +
        pat.images[0].image;
        });
        });
        
    }
    
      
      
    supprimerPatient(p: Patient)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.patientService.supprimerPatient(p.idPatient!).subscribe(() => {
    console.log("patuit supprimé");
    this.chargerPatients();
    });
    }
    ngOnInit(): void {
      this.chargerPatients();
    }
}
