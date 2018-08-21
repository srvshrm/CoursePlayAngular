import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseJson } from './course-json';

@Injectable({
  providedIn: 'root'
})
export class CourseJsonService {

  constructor(private http:HttpClient) { }

  _url = "assets/Courses.json";

  getCoursesJson() {
    return this.http.get<CourseJson[]>(this._url)
  }
}
