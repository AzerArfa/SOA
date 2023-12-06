import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medecin } from '../model/medecin.model';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit{
  @Input()
  medecin! : Medecin;
  @Output()
medecinUpdated = new EventEmitter<Medecin>();
@Input()
ajout!:boolean;

  constructor(){}
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateMedecin ",this.medecin);
    }
    saveMedecin(){
      this.medecinUpdated.emit(this.medecin);
      }
      
}
