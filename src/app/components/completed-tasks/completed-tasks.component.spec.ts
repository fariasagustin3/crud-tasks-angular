import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTasksComponent } from './completed-tasks.component';

describe('CompletedTasksComponent', () => {
  let component: CompletedTasksComponent;
  let fixture: ComponentFixture<CompletedTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedTasksComponent]
    });
    fixture = TestBed.createComponent(CompletedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
