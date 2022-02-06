import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsChekComponent } from './products-chek.component';

describe('ProductsChekComponent', () => {
  let component: ProductsChekComponent;
  let fixture: ComponentFixture<ProductsChekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsChekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsChekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
