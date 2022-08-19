import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvedTicketComponent } from './resolved-ticket.component';

describe('ResolvedTicketComponent', () => {
  let component: ResolvedTicketComponent;
  let fixture: ComponentFixture<ResolvedTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvedTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolvedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
