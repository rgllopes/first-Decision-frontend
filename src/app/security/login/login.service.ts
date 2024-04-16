import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class LoginService{
  constructor(private http:HttpClient) {
  }

  public login(userName:string, password:string):Observable<any> {
    const url = `${environment.apiUrl}/login`;
    return this.http.post<any>(url, {userName, password}, {responseType:'json'})
    .pipe(
      map((data) => this.setTokenLocalStorage(data)
    ),
      catchError((err) => {
        this.removeTokenLocalStorage();
        console.log(err);
        throw 'Falha ao efetuar login! ' + err.error;
      })
    )
  }

  public getToken():string | null {
    return localStorage.getItem(environment.token);
  }

  private setTokenLocalStorage(response:any):void{
    const {type, token, __} = response;
    localStorage.setItem(environment.token , token)
  }

  private removeTokenLocalStorage():void {
    localStorage.removeItem(environment.token);
  }
}
