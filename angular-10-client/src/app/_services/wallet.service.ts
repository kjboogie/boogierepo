import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from '../wallet';
import {Wallettranscation} from '../wallettranscation';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private _http: HttpClient) { }
  fromaccountno:any;
  towalletaccountno:any;

  username:string=localStorage.getItem('username')

  public registerWalletForUser(wallet :Wallet):Observable<any> {
    return this._http.put<any>("http://localhost:8080/api/test/addwallet/"+this.username+"/account",wallet);
  }

  public getWallet():Observable<any> {
    return this._http.get<any>("http://localhost:8080/api/test/walletaccount/"+this.username);
  }

  public insertWalletTransaction(wallett :Wallettranscation):Observable<any> {
    this.fromaccountno=localStorage.getItem('fromaccountno')
     this.towalletaccountno=localStorage.getItem('towalletaccountno')
    return this._http.put<any>("http://localhost:8080/api/test/"+this.fromaccountno+"/walletaccount/"+this.towalletaccountno,wallett);
  }
}
