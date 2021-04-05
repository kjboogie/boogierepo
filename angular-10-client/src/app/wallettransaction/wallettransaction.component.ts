import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallettranscation } from '../wallettranscation';
import { WalletService } from '../_services/wallet.service';

@Component({
  selector: 'app-wallettransaction',
  templateUrl: './wallettransaction.component.html',
  styleUrls: ['./wallettransaction.component.css']
})
export class WallettransactionComponent implements OnInit {


  wallettrans = new Wallettranscation();
  msg='';
  constructor(private _service : WalletService, private _router : Router) { }

  ngOnInit(): void {
  }

   OnInput(val) {
    // this.urlparamEmail = document.getElementsByName('email');
    localStorage.setItem('towalletaccountno', val);
    }
    InputOn(val) {
      // this.urlparamEmail = document.getElementsByName('email');
      localStorage.setItem('fromaccountno', val);
      }


      WalletTransactionInsert(){
        this._service.insertWalletTransaction(this.wallettrans).subscribe(
          data => {
            console.log("response received");
            this.msg = ("Insert in Wallet  Success Fully!" );
            alert("Insert  in Wallet Successfull !!")
          },
          error => {
            console.log("exception occured");
            this.msg=error.error;
            this.msg = ("Error in  Insert  Wallet Process. Please try later !" );
            alert("account does not exist !!")
          })
      }


}
