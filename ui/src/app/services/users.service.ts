import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  BASE_URL = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<object> {
    return this.http.get(this.BASE_URL + "users");
  }
  getUserById(id: number): Observable<object> {
    return this.http.get(this.BASE_URL + "user/1" );
  }
}
