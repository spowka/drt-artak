import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courses } from '../models/courses-model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courses: Courses[] = [];

  constructor(private http: HttpClient) {  }

  getCourses(): Observable<any> {
    return this.http.get("http://localhost:4243/courses");
  }

  getCoursesById(id: number): Observable<any> {
    return this.http.get(`http://localhost:4243/courses/${id}`);
  }

  createCourse(course: Courses) {
    return this.http.post("http://localhost:4243/courses", course);
  }

  updateCourse(id: number, course: Courses) {
    return this.http.put(`http://localhost:4243/courses/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`http://localhost:4243/courses/${id}`);
  }

}
