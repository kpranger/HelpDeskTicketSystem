import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTicketComponent } from './favorite-ticket.component';

describe('FavoriteTicketComponent', () => {
  let component: FavoriteTicketComponent;
  let fixture: ComponentFixture<FavoriteTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
