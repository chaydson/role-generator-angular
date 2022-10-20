import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { 
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  onSubmit(){
    let request: LoginRequest = {
      username: this.formLogin.controls['username'].value,
      password: this.formLogin.controls['password'].value
    };
    this.authService.login(request).subscribe((response) => {
      console.log(response);
    }
    );
  }
}
