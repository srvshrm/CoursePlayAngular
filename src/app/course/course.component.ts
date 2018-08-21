import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { AddCourseFormComponent } from './add-course-form/add-course-form.component';
import { GetDurationComponent } from './get-duration/get-duration.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.getCourse();
  }

  course:Course[];

  getCourse(){
    this.courseService.getCourses().subscribe((data:Course[])=>this.course=data);
  }

  addCourseArray(event:Course){
    this.course.push(event);
  }

}
