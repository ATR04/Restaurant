import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/userModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  baseUrl: string = "http://localhost:3000"

  constructor(private http: HttpClient) {}

  getUser(user: UserModel): Observable<any> {
    const observalble = new Observable((subscriber) => {
      this.http.post(`${this.baseUrl}/getUser`, user).subscribe((res: any) => {
        
      });
    });

    return observalble;
  }

  registerUser(user: UserModel): Observable<any> {
    const observalble = new Observable((subscriber) => {
      this.http.post(`${this.baseUrl}/registerUser`,user).subscribe((res) => {
        //DO nothing
      });
      subscriber.next(true);
    });
    return observalble;
  }
}
