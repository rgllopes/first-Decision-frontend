import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn:'root',
})

export class RegisterUserService{
  constructor(private httpCient:HttpClient) {
  }

  public registerUser(userName:string, email:string, password:string, confirmPassword:string):Observable<any>{
    const url = `${environment.apiUrl}/create-user`;
    return this.httpCient.post(url, {userName, email, password, confirmPassword}, {responseType:'json'})
    .pipe(
      map((data) => this.receivedData(data)),
      catchError((err) => {
        throw 'Falha ao registrar usuário ' + err.error
      })
    )
  }

  public receivedData(response:any) {

  }
}
