import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public name: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  invokeWelcome() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/todos');
  }

  invokeWelcomeWithParam(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/todos/${name}`);
      }
}
