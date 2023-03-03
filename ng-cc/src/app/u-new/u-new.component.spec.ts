import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNewComponent } from './u-new.component';

describe('UNewComponent', () => {
  let component: UNewComponent;
  let fixture: ComponentFixture<UNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
