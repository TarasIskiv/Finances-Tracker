import { Component, Input, OnInit } from '@angular/core';
import { SourceDetails } from '../../models/source-details';
import { ChartItem } from '../../models/chart-item';
import { SourceType } from '../../models/source-type.enum';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit  {
  @Input() chartTitle: string;
  @Input() originData: SourceDetails[] = [];
  @Input() isTotalResult: boolean = false;
  chartOptions: any;
	private filledData: ChartItem[] = [];
  private firstDate: Date;
  private lastDate: Date;

  ngOnInit(): void 
  {
    this.filterOriginData();
    this.setBorderDates();
    if(this.isTotalResult)
    {
      this.filloutMissedData(this.originData.filter(source => source.sourceType === SourceType.Income), true);
      this.filloutMissedData(this.originData.filter(source => source.sourceType === SourceType.Outcome), false);
    }
    else
    {
      this.filloutMissedData(this.originData);
    }
    this.setupChart();
  }
  private setupChart()
  {
    this.chartOptions = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: this.chartTitle
      },
      axisX: {
        title: "Date",
      },
      axisY: {
        title: "Amount",
        suffix: "$"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function(e: any){
          if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else{
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type:"line",
        name: this.isTotalResult ? "Incomes" : "Amount",
        showInLegend: true,
        yValueFormatString: "#,###$",
        dataPoints: this.filledData.filter(x => x.isPrimary).map(item => ({x: item.transactionDate, y: item.amount}))
      },
      {
        type:"line",
        name: this.isTotalResult ? "Outcomes" : "Sum Amount",
        showInLegend: true,
        yValueFormatString: "#,###$",
        dataPoints: this.filledData.filter(x => !x.isPrimary).map(item => ({x: item.transactionDate, y: item.amount}))
      }]
    }	
  }

  filloutMissedData(data: SourceDetails[], isIncome: boolean = true)
  {
    var distinctDates = [...new Set(data.map(source => source.transactionDate))];
    var defaultAmount = 0;
    var sumAmount = 0;
    var currentDate = new Date(this.firstDate); 
    while (currentDate <= this.lastDate) 
    {
      if(this.isInArray(distinctDates,currentDate))
      {
        var sources = data.filter(x => x.transactionDate.toDateString() === currentDate.toDateString());
        defaultAmount = sources.reduce((sum, cur) => sum += cur.amount, 0);
        sumAmount += defaultAmount;
      }
      if(!this.isTotalResult)
      {
        this.filledData.push(new ChartItem(new Date(currentDate), defaultAmount,true));
        this.filledData.push(new ChartItem(new Date(currentDate), sumAmount, false));  
      }
      else
      {
        this.filledData.push(new ChartItem(new Date(currentDate), sumAmount, isIncome));  
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
  }

  private isInArray(dates: Date[], currentDate: Date) {
    return !!(dates.find(item => {return item.toDateString() === currentDate.toDateString()}));
  }

  private setBorderDates()
  {
    var date = this.originData[0].transactionDate;
    this.firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    this.lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  private filterOriginData()
  {
    var currentMonth = new Date().getMonth;
    this.originData = this.originData.filter(x => x.transactionDate.getMonth === currentMonth);
  }
}
