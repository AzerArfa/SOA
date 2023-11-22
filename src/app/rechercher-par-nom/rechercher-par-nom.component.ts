import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-rechercher-par-nom',
  templateUrl: './rechercher-par-nom.component.html',
  styleUrls: ['./rechercher-par-nom.component.css']
})
export class RechercherParNomComponent implements OnInit{
  nomPatient! : string;
  patients!: Patient[];
  allPatients!: Patient[];
  searchTerm!: string;

  constructor(private patientService : PatientService)
  {

  }

  ngOnInit(): void {
    this.patientService.listePatients().subscribe(pats => {
      console.log(pats);
      this.patients = pats;
      });
      
  }
  rechercherPats(){
    this.patientService.rechercherParNom(this.nomPatient).
    subscribe(pats => {
      console.log(pats);
      this.patients=pats;});
  }

  onKeyUp(filterText : string){
    this.patients = this.allPatients.filter(item =>item.nomprenomP.toLowerCase().includes(filterText));
    }
    

}


