import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist-item-detail',
  templateUrl: './todolist-item-detail.component.html',
  styleUrls: ['./todolist-item-detail.component.css']
})
export class TodolistItemDetailComponent implements OnInit {
  showModal = false;

  constructor( private router: Router ) { }

  ngAfterViewInit() {
    this.showModal = true;
  }

  onClose() {
    this.showModal = false;
    //Allow fade out animation to play before navigating back
    setTimeout(
      () => this.router.navigate(['..']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    // Capture click on dialog and prevent it from bubbling to the modal background.
    event.stopPropagation();
    event.cancelBubble = true;
  }

  ngOnInit(): void {
  }

}
