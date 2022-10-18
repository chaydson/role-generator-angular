import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  categories: Category[] = [];
  displayedColumns: string[] = ['category', 'option'];

  constructor(private categoryService: CategoryService) {
    this.getCategories();
   }

  ngOnInit(): void {
  }
  
  getCategories(){
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;

      if(categories[1].options[0] === undefined){
        console.log("UNDEFINEDEEEEE")
      }
      console.log(categories[5].options[0].name);
    });
  }
}
