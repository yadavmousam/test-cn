import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BypasssecurityComponent } from './bypasssecurity.component';

describe('BypasssecurityComponent', () => {
  let component: BypasssecurityComponent;
  let fixture: ComponentFixture<BypasssecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BypasssecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BypasssecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
