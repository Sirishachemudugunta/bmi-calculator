import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeService } from '../../service/nodeservice';
import { ImportsModule } from '../imports';
import { TreeNode } from 'primeng/api';


interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, ImportsModule],
  providers: [NodeService],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnChanges {
  @Input() foodType: string = '';
  @Input() mealType: string = '';

  files!: TreeNode[];
  cols!: Column[];

  carouselItems: any[] = [];
  responsiveOptions: any[] = [];
  currentIndex: number = 0;

  constructor(private nodeService: NodeService) {}

  
  ngOnInit(): void {
    console.log('From carousel component food type:', this.foodType);
    console.log('From carousel component meal type:', this.mealType);
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'time', header: 'Time' }
  ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['foodType'] || changes['mealType']) {
      this.loadCarouselData();
    }
  }

  loadCarouselData(): void {
      if(this.foodType == 'veg' && this.mealType == 'weight-gain'){
        this.nodeService.getVegWGData().then((files) => (this.files = files));
      } else if(this.foodType == 'veg' && this.mealType == 'weight-loss'){
        this.nodeService.getVegWLData().then((files) => (this.files = files));
      } else if(this.foodType == 'non-veg' && this.mealType == 'weight-gain'){
        this.nodeService.getNonVegWGData().then((files) => (this.files = files));
      } else if(this.foodType == 'non-veg' && this.mealType == 'weight-loss'){
        this.nodeService.getNonVegWLData().then((files) => (this.files = files));
      }
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

}
