import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFindingsComponent } from './your-findings.component';

describe('YourFindingsComponent', () => {
  let component: YourFindingsComponent;
  let fixture: ComponentFixture<YourFindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourFindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourFindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
