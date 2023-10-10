import { ComponentFixture, TestBed } from '@angular/core/testing';


import { OtmaneComponent } from './otmane.component';

describe('ListComponent', () => {
  let component:OtmaneComponent;
  let fixture: ComponentFixture<OtmaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtmaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtmaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
