import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsHoneComponent } from './collections-hone.component';

describe('CollectionsHoneComponent', () => {
  let component: CollectionsHoneComponent;
  let fixture: ComponentFixture<CollectionsHoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsHoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsHoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
