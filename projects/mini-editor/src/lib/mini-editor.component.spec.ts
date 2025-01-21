import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniEditorComponent } from './mini-editor.component';

describe('MiniEditorComponent', () => {
  let component: MiniEditorComponent;
  let fixture: ComponentFixture<MiniEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
