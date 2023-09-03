import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/userModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  baseUrl: string = "https://spizey.onrender.com"

  constructor(private http: HttpClient) {}

  getUser(user: UserModel): Observable<any> {
    const observalble = new Observable((subscriber) => {
      this.http.post(`${this.baseUrl}/getUser`, user).subscribe(
        {
          next: (res) => { subscriber.next(res) },
          error: (err) => { console.log(err); }
        }
      );
    });

    return observalble;
  }

  registerUser(user: UserModel): Observable<any> {
    const observalble = new Observable((subscriber) => {
      this.http.post(`${this.baseUrl}/registerUser`,user).subscribe(
        {
          next: (res) => { subscriber.next(res) },
          error: (err) => { console.log(err); }
        }
      );
    });
    return observalble;
  }
}
