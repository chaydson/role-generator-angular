import { Component, Input, OnInit } from '@angular/core';
import { Option } from 'src/app/models/option';
import { OptionService } from 'src/app/services/option.service';

@Component({
  selector: 'app-op-listing',
  templateUrl: './op-listing.component.html',
  styleUrls: ['./op-listing.component.css']
})
export class OpListingComponent implements OnInit {
  options: Option[] = [];
  displayedColumns: string[] = ['name', 'category'];
  
  constructor(private optionService: OptionService) { 
    this.getOptions();
  }

  ngOnInit(): void {
  }

  getOptions(){
    this.optionService.getOptions().subscribe(options => this.options = options);
  }

}
