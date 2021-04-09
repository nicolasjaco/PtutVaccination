import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MaladieService {
  BASE_URL = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {}

  getMaladieById(id: number): Observable<object> {
    return this.http.get(this.BASE_URL + "maladie/29");
  }
}
