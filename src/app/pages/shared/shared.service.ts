import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { User } from './user.model'

@Injectable({
  providedIn:'root'
})

export class UserService{

  constructor(private http:HttpClient){

  }

  public listAll():Observable<User[]>{
    const url =`${environment.apiUrl}/users`

    return this.http.get(url).pipe(
      map(this.mapToUsers)
    )
  }

  private mapToUsers(data:any):Array<User>{

    const listUsers: User[] = [];
    data.forEach((e:any) => listUsers.push(Object.assign(new User, e)))
      console.log(listUsers)
      return listUsers
    };
}
