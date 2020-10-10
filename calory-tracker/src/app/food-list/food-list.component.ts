import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foods: object[];
  myList: {
    name: string;
    calories: number;
    quantity: number;
    images: string;
  }[] = [];
  pattern: string;
  isEditing: boolean = false;
  newFoodName: string = 'Example Name';
  newFoodCalories: number = 250;
  newFoodImage: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Rich_tea.jpg/978px-Rich_tea.jpg';
  quantity: number;
  totalCalories: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.foods = this.foods;
  }

  enableUserToAddFood() {
    this.isEditing = !this.isEditing;
  }

  newFood() {
    const newFood = {
      name: this.newFoodName,
      Calories: this.newFoodCalories,
      image: this.newFoodImage,
      quantity: 0,
    };

    this.foods.unshift(newFood);
    this.isEditing = true;
    this.newFoodName = '';
    this.newFoodCalories = null;
    this.newFoodImage = '';
  }
  addToMyList(food, quantityInput) {
    const existingFood = this.myList.find((item) => item.name === food.name);
    const quantity = Number(quantityInput.value);

    if (existingFood) {
      existingFood.quantity += quantity;
    } else {
      food.quantity = quantity;
      this.myList.push(food);
    }
    this.totalCalories += food.calories * quantity;
    this.quantity = 1;
  }
}
