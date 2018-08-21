import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css']
})
export class AddCourseFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.courseForm = formBuilder.group({
      courseName: ['', Validators.compose([Validators.required])],
      courseDuration: ['', Validators.compose([Validators.required,
      Validators.pattern('^[0-9]{1,}[ ]{1}[A-Z]{1}[a-z]{3,}$')])]
    })
  }

  ngOnInit() {
  }

  courseForm: FormGroup;
  courseName: string;
  courseDuration: string;

  @Output() courseFormValue: EventEmitter<string> = new EventEmitter<string>();

  addCourseForm(courseForm: NgForm) {
    this.courseFormValue.emit(this.courseForm.value);
    this.courseForm.reset();
  }

}
