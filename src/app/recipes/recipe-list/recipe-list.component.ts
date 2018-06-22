import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
      new Recipe('Apple Pie', 'Pie made with apples', 'https://c1.staticflickr.com/3/2284/2070772294_3d0f1eaa6b_b.jpg'),
      new Recipe('Pasta', 'Creamy pasta with salami and pepperoni', 'https://c1.staticflickr.com/3/2284/2070772294_3d0f1eaa6b_b.jpg')
  ];
  constructor() {

  }

  ngOnInit() {
  }

}
