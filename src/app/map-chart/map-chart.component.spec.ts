import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapChartComponent } from './map-chart.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('MapChartComponent', () => {
  let component: MapChartComponent;
  let fixture: ComponentFixture<MapChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapChartComponent ],
      imports: [ MatDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
