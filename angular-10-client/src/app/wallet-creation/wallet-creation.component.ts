import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from '../wallet';
import { WalletService } from '../_services/wallet.service';

@Component({
  selector: 'app-wallet-creation',
  templateUrl: './wallet-creation.component.html',
  styleUrls: ['./wallet-creation.component.css']
})
export class WalletCreationComponent implements OnInit {


  waccount = new Wallet();
  msg='';
  constructor(private _service : WalletService, private _router : Router) { }

  ngOnInit(): void {
  }

  WalletAccountRegister(){
    this._service.registerWalletForUser(this.waccount).subscribe(
      data => {
        console.log("response received");
        this.msg = ("Loan Added Success Fully!" );
        alert("Wallet generated Successfully");
      },
      error => {
        console.log("exception occured");
        this.msg=error.error;
        this.msg = ("Error in  Wallet Creating. Please try later !" );

      })
  }

}
