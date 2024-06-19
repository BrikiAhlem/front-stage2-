import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerComptComponent } from './creer-compt.component';

describe('CreerComptComponent', () => {
  let component: CreerComptComponent;
  let fixture: ComponentFixture<CreerComptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerComptComponent]
    });
    fixture = TestBed.createComponent(CreerComptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
