import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsspyComponent } from './rxjsspy.component';

describe('RxjsspyComponent', () => {
  let component: RxjsspyComponent;
  let fixture: ComponentFixture<RxjsspyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsspyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsspyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
