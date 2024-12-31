import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldsetModule } from 'primeng/fieldset';
import { CommonModule } from '@angular/common';

interface MealPlan {
  day: string;
  meals: {
    breakfast: string;
    snack: string;
    lunch: string;
    eveningSnack: string;
    dinner: string;
  };
}

@Component({
  selector: 'app-meal-plan',
  standalone: true,
  imports: [CommonModule,FieldsetModule],
  templateUrl: './meal-plan.component.html',
  styleUrl: './meal-plan.component.scss'
})
export class MealPlanComponent implements OnInit  {

  mealPlan: MealPlan[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<MealPlan[]>('jsons/meal-plan.json').subscribe((data) => {
      this.mealPlan = data;
    });
  }

}
