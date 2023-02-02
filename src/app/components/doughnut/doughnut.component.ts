import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent{

  @Input() title: string = 'No title'
  @Input() data: number[] = [21, 12, 32]
  
  @Input('labels') doughnutChartLabels: string[] = ['label 1', 'label 2', 'label 3'];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: []
  };

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: this.data,
          backgroundColor: ['#6857E6', '#009FEE', '#F02059']
        },
      ]
    };
  }

  public doughnutChartType: ChartType = 'doughnut';

}
