import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user = new User();
  confirmPassword?:string;
  myForm!: FormGroup;
  err:any;
  constructor(private formBuilder: FormBuilder,  private authService : AuthService, 
    private router:Router) { }
  ngOnInit(): void {
  this.myForm = this.formBuilder.group({
  username : ['', [Validators.required]],
  email : ['', [Validators.required, Validators.email]],
  password : ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword : ['', [Validators.required]]
  } );
  }
  onRegister() {
    this.authService.registerUser(this.user).subscribe({
      next: (res) => {
        alert("veuillez confirmer votre email");
        // this.router.navigate(["/verifEmail", this.user.email]);
      },
      error: (err: any) => {
        if (err && err.error && err.error.message) {
          this.err = err.error.message;
        } else {
          this.err = "An error occurred.";
        }
      }
    });
  }
  
  
}

