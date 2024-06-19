import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootreComponent } from './footre.component';

describe('FootreComponent', () => {
  let component: FootreComponent;
  let fixture: ComponentFixture<FootreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootreComponent]
    });
    fixture = TestBed.createComponent(FootreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
