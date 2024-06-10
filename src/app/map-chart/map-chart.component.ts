import { Component, OnInit, OnDestroy } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import { MatDialog } from '@angular/material/dialog';
import { CountryDetailComponent } from '../country-detail/country-detail.component';
import { CountryData } from '../country-data.interface';
import { COUNTRIES_DATA } from '../country-data';

@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css']
})
export class MapChartComponent implements OnInit, OnDestroy {
  private chart!: am4maps.MapChart;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    console.log('Hello There!!');
    
    this.chart = am4core.create("chartdiv", am4maps.MapChart);
    this.chart.geodata = am4geodata_worldLow;
    this.chart.projection = new am4maps.projections.Miller();

    let polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    polygonSeries.data = COUNTRIES_DATA.map(country => ({
      id: country.id,
      name: country.name,
      details: country.details
    }));

    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#74B266");

    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    polygonTemplate.events.on("hit", (ev) => {
      const country = ev.target.dataItem.dataContext as CountryData;
      this.dialog.open(CountryDetailComponent, {
        data: country.details
      });
    });

    polygonTemplate.events.on("over", (ev) => {
      ev.target.fill = am4core.color(this.getRandomColor());
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
