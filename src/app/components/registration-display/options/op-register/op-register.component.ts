import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { AddOptionRequest } from 'src/app/models/option';
import { CategoryService } from 'src/app/services/category.service';
import { OptionService } from 'src/app/services/option.service';


@Component({
  selector: 'app-op-register',
  templateUrl: './op-register.component.html',
  styleUrls: ['./op-register.component.css']
})
export class OpRegisterComponent implements OnInit {
  categories: Category[] = [];
  formOptionRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private serviceOption: OptionService, 
    private categoryService: CategoryService
    ) { 
    this.formOptionRegister = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required]
    });
    this.getCategories();
  }

  ngOnInit(): void {
  }

  addOption(){
    let request: AddOptionRequest = {
      name: this.formOptionRegister.controls['name'].value,
      category: this.formOptionRegister.controls['category'].value,
    };
    this.serviceOption.addOption(request).subscribe(() => {
      console.log("categoria adicionada");
    }
    );
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }
}
