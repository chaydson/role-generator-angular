import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddCategoryRequest, Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-cat-register',
  templateUrl: './cat-register.component.html',
  styleUrls: ['./cat-register.component.css']
})
export class CatRegisterComponent implements OnInit {
  formCategoryRegister: FormGroup;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) { 
    this.formCategoryRegister = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  addCategory(){
    let request: AddCategoryRequest = {
      name: this.formCategoryRegister.controls['name'].value
    };
    this.categoryService.addCategory(request).subscribe(() => {
      console.log("categoria adicionada");
    }
    );
  }
}
