import { Component, OnInit } from '@angular/core';
import { CourseJsonService } from './course-json.service';
import { CourseJson } from './course-json';


@Component({
  selector: 'app-course-json',
  templateUrl: './course-json.component.html',
  styleUrls: ['./course-json.component.css']
})
export class CourseJsonComponent implements OnInit {

  constructor(private courseJsonService: CourseJsonService) { }

  ngOnInit() {
    this.getCourseJson();
  }

  courseJson:CourseJson[];
  getCourseJson(){
    this.courseJsonService.getCoursesJson().subscribe(
      (data:CourseJson[]) => this.courseJson = data)
  }
}
