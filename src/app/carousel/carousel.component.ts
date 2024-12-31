import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { FieldsetModule } from 'primeng/fieldset';
import { HttpClientModule } from '@angular/common/http';

interface MealPlan {
  day: string;
  foodType: string;
  mealType: string;
  meals: {
    breakfast: string;
    snack: string;
    lunch: string;
    eveningSnack: string;
    dinner: string;
  };
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, FieldsetModule, HttpClientModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnChanges {
  @Input() foodType: string = '';
  @Input() mealType: string = '';

  mealPlans: MealPlan[] = [];
  filteredPlans: MealPlan[] = [];
  carouselItems: any[] = [];
  responsiveOptions: any[] = [];
  currentIndex: number = 0;

  constructor(private http: HttpClient) {
    this.responsiveOptions = [
      { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
      { breakpoint: '768px', numVisible: 1, numScroll: 1 },
      { breakpoint: '560px', numVisible: 1, numScroll: 1 },
    ];
  }

  
  ngOnInit(): void {
    console.log('From carousel component food type:', this.foodType);
    console.log('From carousel component meal type:', this.mealType);
    this.loadCarouselData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['foodType'] || changes['mealType']) {
      // this.filterPlans();
      this.currentIndex = 0;
    }
  }

  loadCarouselData(): void {
    this.http.get<MealPlan[]>('/jsons/meal-plan.json').subscribe((data) => {
      this.mealPlans = data;
      this.filterPlans();
    });
  }

  filterPlans(): void {
    this.filteredPlans = this.mealPlans.filter(
      (plan) => plan.foodType === this.foodType && plan.mealType === this.mealType
    );
    this.carouselItems = this.filteredPlans.map((item) => ({
      day: item.day,
      meals: item.meals,
    }));
    console.log('From carousel component carouselItems:', this.carouselItems);
  }

  getBackgroundClass(): string {
    switch (this.foodType) {
      case 'veg':
        return 'bg-light-green';
      case 'non-veg':
        return 'bg-light-red';
      case 'both':
        return 'bg-gradient';
      default:
        return '';
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.carouselItems.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first item
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.carouselItems.length - 1; // Loop back to the last item
    }
  }
  
}
