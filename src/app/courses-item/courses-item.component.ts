import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Courses } from '../models/courses-model';

@Component({
  selector: '[app-courses-item]',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.css']
})
export class CoursesItemComponent implements OnInit {
  @Input() course: Courses;
  @Output() update: EventEmitter<Courses> = new EventEmitter();
  @Output() delete: EventEmitter<Courses> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onUpdate(course: Courses): void {
    this.update.emit(course);
  }

  onDelete(course: Courses): void {
    this.delete.emit(course);
  }

}
