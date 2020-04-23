import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Courses } from '../models/courses-model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCoursesComponent } from '../dialog-courses/dialog-courses.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses: Courses[];

  constructor(private coursesService: CoursesService, private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(res => {
      this.courses = res;
    });
  }

  openDialog(data?): void {
    const dialogRef = this.dialog.open(DialogCoursesComponent, {
      width: '400px', data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      if (result.id) {
        this.coursesService.updateCourse(+result.id, result).subscribe((course: Courses) => {
          this.courses = this.courses.map(c => c.id === course.id ? course : c);
        });
      } else {
        this.coursesService.createCourse(result).subscribe((course: any) => {
          this.courses.push(course);
        });
      }
    });
  }

  onDelete(course: Courses): void {
    this.coursesService.deleteCourse(course.id).subscribe(_ => {
      this.courses = this.courses.filter(c => c.id !== course.id);
    });
  }

}
