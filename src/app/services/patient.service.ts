import { Injectable } from '@angular/core';
import { Patient } from '../model/patient.model';
import { Medecin } from '../model/medecin.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MedecinWrapper } from '../model/MedecinWrapper';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  apiURL: string = 'http://localhost:8080/GestionMP/api';
  apiURLMed: string = 'http://localhost:8080/GestionMP/med';

  patients! : Patient[]; 
  medecins! : Medecin[];
patient! : Patient;
  constructor(private http : HttpClient) {
   
   }
   listePatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiURL);
  }
  listeMedecins():Observable<MedecinWrapper>{
    return this.http.get<MedecinWrapper>(this.apiURLMed);

    }
    consulterMedecin(id:number): Medecin{
      return this.medecins.find(med => med.idMedecin == id)!;
      }
      ajouterPatient( pat: Patient):Observable<Patient>{
        return this.http.post<Patient>(this.apiURL, pat, httpOptions);
        }
   supprimerPatient(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
    
    consulterPatient(id: number): Observable<Patient> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Patient>(url);
      }
  trierPatients(){
    this.patients = this.patients.sort((n1,n2) => {
    if (n1.idPatient! > n2.idPatient!) {
    return 1;
    }
    if (n1.idPatient! < n2.idPatient!) {
    return -1;
    }
    return 0;
    });
    }
    
    updatePatient(pat :Patient) : Observable<Patient>
    {
    return this.http.put<Patient>(this.apiURL, pat, httpOptions);
    }
    rechercherParMedecin(idmed: number):Observable< Patient[]> {
      const url = `${this.apiURL}/patsmed/${idmed}`;
      return this.http.get<Patient[]>(url);
      }
      rechercherParNom(nom: string):Observable< Patient[]> {
        const url = `${this.apiURL}/patsByName/${nom}`;
        return this.http.get<Patient[]>(url);
        }
        

  }
