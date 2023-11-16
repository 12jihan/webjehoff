import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubTableComponent } from './github-table.component';

describe('GithubTableComponent', () => {
  let component: GithubTableComponent;
  let fixture: ComponentFixture<GithubTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubTableComponent]
    });
    fixture = TestBed.createComponent(GithubTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
