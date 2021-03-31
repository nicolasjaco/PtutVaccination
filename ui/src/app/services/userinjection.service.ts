import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserinjectionService {
  BASE_URL = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {}

  getAllUserInjections(): Observable<object> {
    return this.http.get(this.BASE_URL + "userinjections");
  }
  createUserInjection(
    idInjection: number,
    idUser: number,
    date: Date,
    num_lot: number
  ): Observable<object> {
    return this.http.post(this.BASE_URL + "userinjection", {
      idInjection: idInjection,
      idUtilisateur: idUser,
      date: date,
      numero_lot: num_lot,
    });
  }
}
