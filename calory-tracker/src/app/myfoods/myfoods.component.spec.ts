import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfoodsComponent } from './myfoods.component';

describe('MyfoodsComponent', () => {
  let component: MyfoodsComponent;
  let fixture: ComponentFixture<MyfoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
