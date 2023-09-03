import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseUrl: string = "https://spizey.onrender.com";

  constructor(private http: HttpClient) { }

  getMenu(): Observable<any> {
    const observable = new Observable((subscriber) => {
      this.http.get(`${this.baseUrl}/getMenu`).subscribe(
        {
          next: (res) => { subscriber.next(res) },
          error: (err) => { console.log(err); }
        }
      );
    });
    return observable
  }
}
