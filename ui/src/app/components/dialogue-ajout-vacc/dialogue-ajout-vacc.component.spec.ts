import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueAjoutVaccComponent } from './dialogue-ajout-vacc.component';

describe('DialogueAjoutVaccComponent', () => {
  let component: DialogueAjoutVaccComponent;
  let fixture: ComponentFixture<DialogueAjoutVaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueAjoutVaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueAjoutVaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
