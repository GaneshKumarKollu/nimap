import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://ca31cc80712c7d2f726b.free.beeceptor.com/cc/person/'; 

  
  postData(data: any): Observable<any> {
    data = {
      "name" : "shubham" 
    }
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}`, JSON.stringify(data), { headers });
  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

}
