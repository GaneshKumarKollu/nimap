import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateData(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }
}
