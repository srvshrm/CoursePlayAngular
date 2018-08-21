import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseJsonComponent } from './course-json/course-json.component';
import { AppRoutingModule } from './/app-routing.module';
import { GetDurationComponent } from './course/get-duration/get-duration.component';
import { AddCourseFormComponent } from './course/add-course-form/add-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    DashboardComponent,
    CourseJsonComponent,
    GetDurationComponent,
    AddCourseFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
