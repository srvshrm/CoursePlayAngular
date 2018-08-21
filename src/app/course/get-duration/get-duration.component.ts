import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-get-duration',
  templateUrl: './get-duration.component.html',
  styleUrls: ['./get-duration.component.css']
})
export class GetDurationComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe((data: Course[]) => this.course = data);
  }

  course: Course[];

  searchName: string;
  duration: string;

  searchCourse() {
    var search: boolean = false;
    for (let c of this.course) {
      if (c.courseName == this.searchName) {
        this.duration = c.courseDuration;
        search = true;
      }
    }
    if (search == false) {
      this.duration = "Not Found";
    }
  }

}
