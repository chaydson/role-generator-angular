import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cat-register',
  templateUrl: './cat-register.component.html',
  styleUrls: ['./cat-register.component.css']
})
export class CatRegisterComponent implements OnInit {
  formCategoryRegister: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.formCategoryRegister = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
