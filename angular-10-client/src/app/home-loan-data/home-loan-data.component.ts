import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-home-loan-data',
  templateUrl: './home-loan-data.component.html',
  styleUrls: ['./home-loan-data.component.css']
})
export class HomeLoanDataComponent implements OnInit {

  loan:any;

  constructor(private service:LoanService) { }

  ngOnInit(): void {
    this.service.getloans().subscribe(rest=>{
      this.loan = rest;
    })
  }

}
