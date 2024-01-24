import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNewsComponent } from './add-edit-news.component';

describe('AddEditNewsComponent', () => {
  let component: AddEditNewsComponent;
  let fixture: ComponentFixture<AddEditNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditNewsComponent]
    });
    fixture = TestBed.createComponent(AddEditNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
