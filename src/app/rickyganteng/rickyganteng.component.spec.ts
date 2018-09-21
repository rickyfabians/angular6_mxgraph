import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickygantengComponent } from './rickyganteng.component';

describe('RickygantengComponent', () => {
  let component: RickygantengComponent;
  let fixture: ComponentFixture<RickygantengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickygantengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickygantengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
