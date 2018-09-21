import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameComponentComponent } from './name-component.component';

describe('NameComponentComponent', () => {
  let component: NameComponentComponent;
  let fixture: ComponentFixture<NameComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
