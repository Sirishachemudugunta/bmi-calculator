import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bmi-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bmi-calculator.component.html',
  styleUrl: './bmi-calculator.component.scss'
})
export class BmiCalculatorComponent {

  weight: number = 0;
  height: number = 0;
  bmi: number | null = null;
  bmiCategory: string = '';
  bmiCategoryClass: string = '';

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      const heightInMeters = this.height / 100;
      this.bmi = this.weight / (heightInMeters * heightInMeters);
      this.determineBMICategory();
    }
  }

  determineBMICategory() {
    if (this.bmi !== null) {
      if (this.bmi < 18.5) {
        this.bmiCategory = 'Underweight';
        this.bmiCategoryClass = 'warning';
      } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
        this.bmiCategory = 'Normal weight';
        this.bmiCategoryClass = 'success';
      } else if (this.bmi >= 25 && this.bmi < 29.9) {
        this.bmiCategory = 'Overweight';
        this.bmiCategoryClass = 'warning';
      } else {
        this.bmiCategory = 'Obesity';
        this.bmiCategoryClass = 'danger';
      }
    }
  }

}
