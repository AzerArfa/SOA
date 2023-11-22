import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { RechercheParMedecinComponent } from './recherche-par-medecin/recherche-par-medecin.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
const routes: Routes = [
  {path: "patients", component : PatientsComponent},
  {path: "add-patient", component : AddPatientComponent},
  {path: "updatePatient/:id", component: UpdatePatientComponent},
  {path: "rechercherParMedecin", component : RechercheParMedecinComponent},
  {path: "rechercherParNom", component : RechercherParNomComponent},
  { path: "", redirectTo: "patients", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
