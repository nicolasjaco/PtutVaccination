import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRappelComponent } from './dialog-rappel.component';

describe('DialogRappelComponent', () => {
  let component: DialogRappelComponent;
  let fixture: ComponentFixture<DialogRappelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRappelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
