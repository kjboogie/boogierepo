import { Loan } from './loan';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// import  {getuser } from './login/login.component'

@Injectable({
  providedIn: 'root'
})
export class LoanService {


  username:string=localStorage.getItem('username')
  // try:string=getuser();

  constructor(private _http:HttpClient) { }

  public registerLoanForUser(loan :Loan):Observable<any> {
    return this._http.put<any>("http://localhost:8080/api/test/"+this.username+"/loan",loan);
  }

  public getLoan():Observable<any> {
    return this._http.get<any>("http://localhost:8080/api/test/user/"+this.username+"/loan");
  }

  public sendHomeLoanData(data):Observable<any>{
    return this._http.put<any>("http://localhost:8080/api/test/addhomeloan/"+this.username,data);
  }

  public getloans():Observable<any>
  {
    return this._http.get("http://localhost:8080/api/test/gethomeloans/"+this.username+"/hloan");
  }

    // public setWalletForAUser(wallet :Wallet):Observable<any>{
    //   return this._http.put<any>("http://localhost:8080/api/test/wallet/"+this.username,wallet);
    // }

}
