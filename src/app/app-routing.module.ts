import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { RechercheParMedecinComponent } from './recherche-par-medecin/recherche-par-medecin.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { ListeMedecinsComponent } from './liste-medecins/liste-medecins.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PatientGuard } from './patient.guard';
const routes: Routes = [
  {path: "patients", component : PatientsComponent},
  {path: "add-patient", component : AddPatientComponent, canActivate:[PatientGuard]},
  {path: "updatePatient/:id", component: UpdatePatientComponent},
  {path: "rechercherParMedecin", component : RechercheParMedecinComponent},
  {path: "rechercherParNom", component : RechercherParNomComponent},
  {path:"listemedecins", component : ListeMedecinsComponent},
  {path: 'login', component: LoginComponent},
  {path:"update-medecin", component:UpdateMedecinComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: "", redirectTo: "patients", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
