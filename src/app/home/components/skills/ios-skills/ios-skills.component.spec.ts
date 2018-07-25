import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosSkillsComponent } from './ios-skills.component';

describe('IosSkillsComponent', () => {
  let component: IosSkillsComponent;
  let fixture: ComponentFixture<IosSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
