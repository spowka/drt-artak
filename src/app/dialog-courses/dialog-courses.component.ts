import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Courses } from '../models/courses-model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: '[app-dialog-courses]',
  templateUrl: './dialog-courses.component.html',
  styleUrls: ['./dialog-courses.component.css']
})
export class DialogCoursesComponent implements OnInit {
  public coursesForm: FormGroup;

  public isNew = true;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogCoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Courses) { }

  ngOnInit(): void {
    this.coursesForm = this.fb.group({
      title: ['', [
        Validators.required
      ]],
      duration: ['', [
        Validators.required
      ]],
      'duration-unit': ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required
      ]]
    });

    if (this.data && this.data.id) {
      this.isNew = false;
      this.coursesForm.addControl('id', new FormControl(''));
      this.coursesForm.patchValue(this.data);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.coursesForm.invalid) {
      return;
    }

    this.dialogRef.close(this.coursesForm.value);
  }
}
