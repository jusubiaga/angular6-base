import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSharedComponent } from './custom-shared.component';

describe('CustomSharedComponent', () => {
  let component: CustomSharedComponent;
  let fixture: ComponentFixture<CustomSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
