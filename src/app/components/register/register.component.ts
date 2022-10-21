import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) {
    this.formRegister = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    let request: Register = {
      name: this.formRegister.controls['name'].value,
      username: this.formRegister.controls['username'].value,
      password: this.formRegister.controls['password'].value,
      email: this.formRegister.controls['email'].value,
    };
    this.registerService.registerUser(request).subscribe((response) => {
      console.log(response);
    }
    );
  }

}
