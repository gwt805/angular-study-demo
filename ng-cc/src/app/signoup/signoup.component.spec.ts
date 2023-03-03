import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoupComponent } from './signoup.component';

describe('SignoupComponent', () => {
  let component: SignoupComponent;
  let fixture: ComponentFixture<SignoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignoupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
