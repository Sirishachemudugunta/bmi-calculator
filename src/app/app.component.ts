import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BmiCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bmi-calculator';
}
