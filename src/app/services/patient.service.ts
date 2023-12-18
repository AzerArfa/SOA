import { Injectable } from '@angular/core';
import { Patient } from '../model/patient.model';
import { Medecin } from '../model/medecin.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MedecinWrapper } from '../model/MedecinWrapper';
import { AuthService } from './auth.service';
import { Image } from '../model/image.model';
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
  constructor(private http : HttpClient,
    private authService : AuthService) {
   
   }
   listePatients(): Observable<Patient[]> {
  

    return this.http.get<Patient[]>(this.apiURL+"/all");
  }
  listeMedecins():Observable<MedecinWrapper>{
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<MedecinWrapper>(this.apiURLMed,{headers:httpHeaders});

    }
    consulterMedecin(id:number): Medecin{
      return this.medecins.find(med => med.idMedecin == id)!;
      }
      ajouterPatient( pat: Patient):Observable<Patient>{
        let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.post<Patient>(this.apiURL+"/addpat", pat, {headers:httpHeaders});
        }
   supprimerPatient(id : number) {
    const url = `${this.apiURL}/delpat/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});

    }
    
    consulterPatient(id: number): Observable<Patient> {
      const url = `${this.apiURL}/getbyid/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<Patient>(url,{headers:httpHeaders});
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
    {let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.put<Patient>(this.apiURL+"/updatepat", pat, {headers:httpHeaders});
    }
    rechercherParMedecin(idmed: number):Observable< Patient[]> {
      const url = `${this.apiURL}/patsmed/${idmed}`;
      return this.http.get<Patient[]>(url);
      }
      rechercherParNom(nom: string):Observable< Patient[]> {
        const url = `${this.apiURL}/patsByName/${nom}`;
        return this.http.get<Patient[]>(url);
        }
        
        ajouterMedecin( med: Medecin):Observable<Medecin>{
          return this.http.post<Medecin>(this.apiURLMed, med, httpOptions);
          }
          uploadImage(file: File, filename: string): Observable<Image>{
            const imageFormData = new FormData();
            imageFormData.append('image', file, filename);
            const url = `${this.apiURL + '/image/upload'}`;
            return this.http.post<Image>(url, imageFormData);
            }
            loadImage(id: number): Observable<Image> {
            const url = `${this.apiURL + '/image/get/info'}/${id}`;
            return this.http.get<Image>(url);
            }
            uploadImagePat(file: File, filename: string, idProd:number): Observable<any>{
              const imageFormData = new FormData();
              imageFormData.append('image', file, filename);
              const url = `${this.apiURL + '/image/uplaodImagePat'}/${idProd}`;
              return this.http.post(url, imageFormData);
           }
              supprimerImage(id : number) {
                const url = `${this.apiURL}/image/delete/${id}`;
                return this.http.delete(url, httpOptions);
                }
                
  }
