import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpspComponent } from './spsp.component';

describe('SpspComponent', () => {
  let component: SpspComponent;
  let fixture: ComponentFixture<SpspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
