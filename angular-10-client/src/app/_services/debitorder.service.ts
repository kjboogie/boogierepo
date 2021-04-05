import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Debitorder } from '../debitorder';

@Injectable({
  providedIn: 'root'
})
export class DebitorderService {

  constructor(private _http:HttpClient) { }
  recaccountnumber:any;
  sendaccountnumber:any;


  public debitorderInsertForAAccount(dborder: Debitorder):Observable<any> {
     this.recaccountnumber=localStorage.getItem('recaccountnumber')
     this.sendaccountnumber=localStorage.getItem('sendaccountnumber')
    return this._http.put<any>("http://localhost:8080/api/test/"+this.recaccountnumber+"/debitorder/"+this.sendaccountnumber,dborder);
}

public debitorderSendDetails():Observable<any> {
  this.sendaccountnumber=localStorage.getItem('sendaccountnumber')
  return this._http.get<any>("http://localhost:8080/api/test/display/"+this.sendaccountnumber+"/debitorder");

}

}
