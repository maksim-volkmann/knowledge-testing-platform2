import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionerViewerComponent } from './questioner-viewer.component';

describe('QuestionerViewerComponent', () => {
  let component: QuestionerViewerComponent;
  let fixture: ComponentFixture<QuestionerViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionerViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionerViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
