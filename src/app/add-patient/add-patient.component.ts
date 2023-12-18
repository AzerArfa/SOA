import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { Medecin } from '../model/medecin.model';
import { Router } from '@angular/router';
import { Image } from '../model/image.model';
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
uploadedImage!: File;
imagePath: any;

  constructor(private patientService: PatientService,
    private router :Router){}
    addPatient(){
      this.newPatient.medecin = this.medecins.find(med => med.idMedecin == this.newIdMedecin)!;
      this.patientService.ajouterPatient(this.newPatient)
      .subscribe(pat => {
      console.log(pat);
      this.router.navigate(['patients']);
      });
      this.patientService
.uploadImage(this.uploadedImage, this.uploadedImage.name)
.subscribe((img: Image) => {
this.newPatient.image=img;
this.newPatient.medecin = this.medecins.find(med => med.idMedecin
== this.newIdMedecin)!;
this.patientService
.ajouterPatient(this.newPatient)
.subscribe(() => {
this.router.navigate(['produits']);
});
});

      }
      
  ngOnInit(): void {
    this.patientService.listeMedecins().
    subscribe(meds => {console.log(meds);
    this.medecins = meds._embedded.medecins;
    }
    );
    
  }
  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
    }
    
}
