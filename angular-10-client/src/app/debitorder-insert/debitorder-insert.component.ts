import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Debitorder } from '../debitorder';
import { DebitorderService } from '../_services/debitorder.service'

@Component({
  selector: 'app-debitorder-insert',
  templateUrl: './debitorder-insert.component.html',
  styleUrls: ['./debitorder-insert.component.css']
})
export class DebitorderInsertComponent implements OnInit {

  dborder = new Debitorder();
  msg='';
  constructor(private _service : DebitorderService, private _router : Router) { }

  ngOnInit(): void {
  }

  OnInput(val) {

    // this.urlparamEmail = document.getElementsByName('email');
    localStorage.setItem('recaccountnumber', val);


    }
    InputOn(val) {

      // this.urlparamEmail = document.getElementsByName('email');
      localStorage.setItem('sendaccountnumber', val);


      }

      DebitOrderRegister(){
    this._service.debitorderInsertForAAccount(this.dborder).subscribe(
      data => {
        console.log("response received");
        this.msg = ("Debit Order Success Fully!" );
        alert("Payment Successfull !!")
      },
      error => {
        console.log("exception occured");
        this.msg=error.error;
        this.msg = ("Error in  DebitOrder Process. Please try later !" );
        alert("account does not exist !!")
      })
  }

}
