import { Component, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-cat-listing',
  templateUrl: './cat-listing.component.html',
  styleUrls: ['./cat-listing.component.css']
})
export class CatListingComponent implements OnInit {
  categories: Category[] = [];
  displayedColumns: string[] = ['name'];

  constructor(private categoryService: CategoryService) {
    this.getCategories();
  }

  ngOnInit(): void {
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }
}
