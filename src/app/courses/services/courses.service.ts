import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly baseUrl = '';//environment.apiUrl+'/';
  //private readonly API = `${this.baseUrl}/api/courses`;
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list()  {
    return this.httpClient.get<Course[]>(this.baseUrl+this.API)
    .pipe(
      first(),
      delay(1000),
      tap(courses => console.log(courses))
    );

  }

  save(record: Course){
    return this.httpClient.post<Course>(this.baseUrl+this.API, record);
  }
}
