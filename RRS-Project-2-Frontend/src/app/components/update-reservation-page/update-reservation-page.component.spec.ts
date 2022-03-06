import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateReservationPageComponent } from './update-reservation-page.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('UpdateReservationPageComponent', () => {
  let component: UpdateReservationPageComponent;
  let fixture: ComponentFixture<UpdateReservationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReservationPageComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,MatDialogModule],

      providers:[ { provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: { } }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
