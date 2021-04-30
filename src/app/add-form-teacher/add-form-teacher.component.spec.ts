import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormTeacherComponent } from './add-form-teacher.component';

describe('AddFormTeacherComponent', () => {
  let component: AddFormTeacherComponent;
  let fixture: ComponentFixture<AddFormTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
