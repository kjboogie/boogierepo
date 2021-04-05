import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Account } from '../../app/account'
import {AccountService} from '../_services/account.service'
import { Loan } from '../loan';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  account = new Account();

  msg='';


  constructor(private _service : AccountService, private _router : Router) { }

  ngOnInit(): void {
  }


  AccountRegister(){
    this._service.registerAccountForUser(this.account).subscribe(
      data => {
        console.log("response received");
        this.msg = ("Loan Added Success Fully!" );
        this._router.navigate(['/account'])
      },
      error => {
        console.log("exception occured");
        this.msg=error.error;
        this.msg = ("Error in  Account Creating. Please try later !" );

      })
  }
}
