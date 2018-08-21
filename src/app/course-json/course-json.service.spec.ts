import { TestBed, inject } from '@angular/core/testing';

import { CourseJsonService } from './course-json.service';

describe('CourseJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseJsonService]
    });
  });

  it('should be created', inject([CourseJsonService], (service: CourseJsonService) => {
    expect(service).toBeTruthy();
  }));
});
