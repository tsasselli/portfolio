import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSkillsComponent } from './design-skills.component';

describe('DesignSkillsComponent', () => {
  let component: DesignSkillsComponent;
  let fixture: ComponentFixture<DesignSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
