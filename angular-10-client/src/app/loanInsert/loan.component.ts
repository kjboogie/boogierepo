import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Loan } from '../loan'
import { LoanService } from '../loan.service';


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

   loan = new Loan();
   msg='';
   constructor(private _service : LoanService, private _router : Router) { }

  ngOnInit() {
  }

  LoanRegister(){
    this._service.registerLoanForUser(this.loan).subscribe(
      data => {
        console.log("response received");
        this.msg = ("Loan Added Success Fully!" );
        this._router.navigate(['/loandata'])
      },
      error => {
        console.log("exception occured");
        this.msg=error.error;
        this.msg = ("Error in  loan Process. Please try later !" );
      }
    )
  }




}
