import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistItemDetailComponent } from './todolist-item-detail.component';

describe('TodolistItemDetailComponent', () => {
    let component: TodolistItemDetailComponent;
    let fixture: ComponentFixture<TodolistItemDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TodolistItemDetailComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodolistItemDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
