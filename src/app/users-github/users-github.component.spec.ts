import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGithubComponent } from './users-github.component';

describe('UsersGithubComponent', () => {
  let component: UsersGithubComponent;
  let fixture: ComponentFixture<UsersGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
