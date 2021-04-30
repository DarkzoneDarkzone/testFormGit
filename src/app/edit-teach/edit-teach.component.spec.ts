import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeachComponent } from './edit-teach.component';

describe('EditTeachComponent', () => {
  let component: EditTeachComponent;
  let fixture: ComponentFixture<EditTeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
