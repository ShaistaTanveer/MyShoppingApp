import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytreeDataComponent } from './mytree-data.component';

describe('MytreeDataComponent', () => {
  let component: MytreeDataComponent;
  let fixture: ComponentFixture<MytreeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytreeDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MytreeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
