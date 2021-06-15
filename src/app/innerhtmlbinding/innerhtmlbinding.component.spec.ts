import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerhtmlbindingComponent } from './innerhtmlbinding.component';

describe('InnerhtmlbindingComponent', () => {
  let component: InnerhtmlbindingComponent;
  let fixture: ComponentFixture<InnerhtmlbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerhtmlbindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerhtmlbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
