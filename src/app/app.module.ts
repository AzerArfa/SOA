import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParMedecinComponent } from './recherche-par-medecin/recherche-par-medecin.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    RechercheParMedecinComponent,
    RechercherParNomComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
