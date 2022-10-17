import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-op-register',
  templateUrl: './op-register.component.html',
  styleUrls: ['./op-register.component.css']
})
export class OpRegisterComponent implements OnInit {
  formOptionRegister: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.formOptionRegister = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
