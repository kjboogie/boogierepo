import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  username:string=localStorage.getItem('username')
  // try:string=getuser();

  constructor(private _http:HttpClient) { }

  public registerAccountForUser(account :Account):Observable<any> {
    return this._http.put<any>("http://localhost:8080/api/test/addaccount/"+this.username+"/account",account);
}

public getAccountOfUser():Observable<any> {
  return this._http.get<any>("http://localhost:8080/api/test/account/"+this.username);
}

}
