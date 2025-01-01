import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GaugeChartComponent } from '../gauge-chart/gauge-chart.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { TreeSelect } from 'primeng/treeselect';

@Component({
  selector: 'app-bmi-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, GaugeChartComponent, CarouselComponent, TreeSelect],
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss'],
})
export class BmiCalculatorComponent {
  weight: number = 0;
  height: number = 0;
  bmi: number | null = null;
  bmiCategory: string = '';
  bmiCategoryClass: string = '';
  needleValue: number = 0;
  showCard: boolean = false;
  showCarouselCard: boolean = false;
  displayResultText: string = '';
  selectedFoodType: string = '';
  selectedMealType: string = '';
  nodes: any[] = [
    {
      label: 'Food Types',
      children: [
        { label: 'Vegetarian', data: 'veg' },
        { label: 'Non-Vegetarian', data: 'non-veg' },
        { label: 'Both', data: 'both' },
      ],
    },
  ];
  selectedNodes: any;

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      const heightInMeters = this.height * 0.3048;  // Convert feet to meters
      this.bmi = this.weight / (heightInMeters * heightInMeters);
      this.determineBMICategory();
      this.needleValue = this.bmi || 0;
      this.showCard = true;
    }
  }

  determineBMICategory() {
    if (this.bmi !== null) {
      if (this.bmi < 18.5) {
        this.bmiCategory = 'Underweight';
        this.bmiCategoryClass = 'warning';
        this.displayResultText = 'Choose your food suppliments';
      } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
        this.bmiCategory = 'Normal weight';
        this.bmiCategoryClass = 'success';
        this.displayResultText = 'Choose your food suppliments';
      } else if (this.bmi >= 25 && this.bmi < 29.9) {
        this.bmiCategory = 'Overweight';
        this.bmiCategoryClass = 'warning';
        this.displayResultText = 'Choose your food suppliments';
      } else {
        this.bmiCategory = 'Obesity';
        this.bmiCategoryClass = 'danger';
        this.displayResultText = 'Choose your food suppliments';
      }
    }
  }

  updateNeedleRotation() {
    this.needleValue = this.bmi || 0;
  }

  onFoodTypeChange(event: any): void {
    this.selectedFoodType = this.selectedNodes ? this.selectedNodes.data : '';
    if (this.bmi !== null) {
      this.selectedMealType = this.getMealType(this.bmi);
    } else {
      this.selectedMealType = '';
    }
    if (this.selectedFoodType) {
      this.showCarouselCard = true;
    }
  }

  getMealType(bmi: number): string {
    if (bmi < 18.5) {
      return 'weight-gain';
    } else if (bmi >= 25) {
      return 'weight-loss';
    } else {
      return '';
    }
  }
}
