import { Component, Input, OnChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-gauge-chart',
  template: `<canvas id="gaugeChart" style="width: 100%; height: 263px;"></canvas>`,
  styleUrls: ['./gauge-chart.component.scss'],
})
export class GaugeChartComponent implements OnChanges {
  @Input() needleValue: number = 0;

  private chart: Chart | null = null;

  ngOnChanges(): void {
    if (this.chart) {
      this.updateNeedle(this.needleValue);
    } else {
      this.initializeChart();
    }
  }

  initializeChart() {
    const data = {
      labels: ['Underweight', 'Normal Weight', 'Overweight', 'Obesity'],
      datasets: [
        {
          label: 'BMI Categories',
          data: [18.5, 6.4, 5, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 26, 104, 1)',
          ],
          borderColor: 'white',
          borderWidth: 2,
          cutout: '95%',
          circumference: 180,
          rotation: 270,
        },
      ],
    };

    const gaugeNeedle = {
      id: 'gaugeNeedle',
      afterDatasetDraw: (chart: any) => {
        const { ctx, chartArea: { width, height } } = chart;

        // Use the needleValue from the component instead of the dataset
        const needleValue = this.needleValue;
        const dataTotal = chart.data.datasets[0].data.reduce((a: number, b: number) => a + b, 0);
        const angle = Math.PI + (1 / dataTotal) * needleValue * Math.PI;
        const cx = width / 2;
        const cy = chart._metasets[0].data[0].y;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, -2);
        ctx.lineTo(height - 10, 0);
        ctx.lineTo(0, 2);
        ctx.fillStyle = '#444';
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#444';
        ctx.fill();
        ctx.restore();
      },
    };

    this.chart = new Chart('gaugeChart', {
      type: 'doughnut',
      data,
      options: {
        maintainAspectRatio: false, // Disable maintaining aspect ratio
        responsive: true, // Ensure the chart resizes responsively
        plugins: {
          legend: { display: false },
        },
      },
      plugins: [gaugeNeedle],
    });
  }

  updateNeedle(value: number) {
    if (this.chart) {
      this.needleValue = value; // Update the needle value
      this.chart.update();
    }
  }
}
