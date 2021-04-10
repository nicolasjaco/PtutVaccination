import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class VaccinsService {
  BASE_URL = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {}

  getAllVaccins(): Observable<object> {
    return this.http.get(this.BASE_URL + "vaccins");
  }

  getVaccinsByMaladie(id: number): Observable<object> {
    return this.http.get(this.BASE_URL + "vaccins/maladie/" + id);
  }
}
