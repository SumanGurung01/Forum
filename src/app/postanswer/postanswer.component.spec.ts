import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostanswerComponent } from './postanswer.component';

describe('PostanswerComponent', () => {
  let component: PostanswerComponent;
  let fixture: ComponentFixture<PostanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostanswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
