import { Injectable } from '@angular/core';
import { observable, of } from 'rxjs';
import { Course } from './course';
import { Courses } from './mock-course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(){
    return of<Course[]>(Courses);
  }
}