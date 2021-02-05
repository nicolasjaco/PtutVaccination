import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronologieComponent } from './chronologie.component';

describe('ChronologieComponent', () => {
  let component: ChronologieComponent;
  let fixture: ComponentFixture<ChronologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChronologieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
