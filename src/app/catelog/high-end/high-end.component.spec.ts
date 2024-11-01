import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighEndComponent } from './high-end.component';

describe('HighEndComponent', () => {
  let component: HighEndComponent;
  let fixture: ComponentFixture<HighEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighEndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
