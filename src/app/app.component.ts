import { Component,ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries ;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild("chart") chart: ChartComponent|undefined;
  public chartOptions: Partial<ChartOptions>;
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;

  constructor() {
    this.series = [
      {
        data: [
          {
            x: "Suzuki",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-03").getTime(),
            ],
          },
          {
            x: "Suzuki",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-06").getTime(),
            ],
          },
          {
            x: "Tanaka",
            y: [
              new Date("2019-03-04").getTime(),
              new Date("2019-03-08").getTime()
            ]
          },
          {
            x: "Sato",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-12").getTime()
            ]
          },
          {
            x: "Yamada",
            y: [
              new Date("2019-03-12").getTime(),
              new Date("2019-03-18").getTime()
            ]
          }
        ]
      }
    ];
    this.chart = {
        height: 350,
        type: "rangeBar"
    };
    this.title = {
      text: "Run! CHART!!"
    }
    this.xaxis=  {
      type: "datetime"   
     }
    this.plotOptions = {
      bar: {
        horizontal: true
      }
    }
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    }
  }
}
