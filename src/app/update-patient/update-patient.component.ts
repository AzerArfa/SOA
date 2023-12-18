import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Medecin } from '../model/medecin.model';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styles: []
})
export class UpdatePatientComponent implements OnInit{
  currentPatient = new Patient();
  medecins! : Medecin[];
updatedMedecinId? : number;
myImage! : string;
  constructor(private activatedRoute: ActivatedRoute,private router :Router,
    private patientService: PatientService)
  {
  }
  ngOnInit() {
   /* this.patientService.consulterPatient(this.activatedRoute.snapshot.params['id']).
    subscribe( pat =>{ this.currentPatient = pat; this.updatedMedecinId=this.currentPatient.medecin?.idMedecin } ) ;
    
    this.patientService.listeMedecins().
    subscribe(meds => {this.medecins = meds._embedded.medecins;
      console.log(meds);
  });
  this.patientService.consulterPatient(this.activatedRoute.snapshot.params['id']).
  subscribe( pat =>{ this.currentPatient = pat;
  this.updatedMedecinId = pat.medecin.idMedecin;
  this.patientService
  .loadImage(this.currentPatient.image.idImage)
  .subscribe((img: Image) => {
  this.myImage = 'data:' + img.type + ';base64,' + img.image;
  });
  } ) ;*/
  this.patientService.listeMedecins().
subscribe(meds => {this.medecins = meds._embedded.medecins;
});
this.patientService.consulterPatient(this.activatedRoute.snapshot.params['id'])
.subscribe( pat =>{ this.currentPatient = pat;
this.updatedMedecinId = pat.medecin.idMedecin;
} ) ;
    }
    updatePatient() {
      /*this.currentPatient.medecin = this.medecins.find(med => med.idMedecin == this.updatedMedecinId)!;
    
      // Test if the image of the patient has been modified
      if (this.isImageUpdated) {
        this.patientService.uploadImage(this.uploadedImage, this.uploadedImage.name)
          .subscribe((img: Image) => {
            this.currentPatient.image = img;
            this.patientService.updatePatient(this.currentPatient)
              .subscribe((pat) => {
                this.router.navigate(['patients']);
              });
          });
      } else {
        this.patientService.updatePatient(this.currentPatient)
          .subscribe((pat) => {
            this.router.navigate(['patients']);
          });
      }*/
      this.currentPatient.medecin = this.medecins.find(med => med.idMedecin ==
        this.updatedMedecinId)!;
        this.patientService
        .updatePatient(this.currentPatient)
        .subscribe((pat) => {
        this.router.navigate(['patients']);
        });
        
    }
    
      
      uploadedImage!: File;
      isImageUpdated: Boolean=false;
      onImageUpload(event: any) {
        if(event.target.files && event.target.files.length) {
        this.uploadedImage = event.target.files[0];
        this.isImageUpdated =true;
        const reader = new FileReader();
        reader.readAsDataURL(this.uploadedImage);
        reader.onload = () => { this.myImage = reader.result as string; };
        }
        }
        onAddImagePatient(){
          this.patientService
          .uploadImagePat(this.uploadedImage,this.uploadedImage.name,this.currentPatient.idPatient)
              .subscribe( (img : Image) => {
                    this.currentPatient.images.push(img);
                 });
        }  
        supprimerImage(img: Image){
          let conf = confirm("Etes-vous sûr ?");
          if (conf)
          this.patientService.supprimerImage(img.idImage).subscribe(() => {
          //supprimer image du tableau currentProduit.images
          const index = this.currentPatient.images.indexOf(img, 0);
          if (index > -1) {
          this.currentPatient.images.splice(index, 1);
          }
          });
          }
}
