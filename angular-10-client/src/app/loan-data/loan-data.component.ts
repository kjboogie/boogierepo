import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-data',
  templateUrl: './loan-data.component.html',
  styleUrls: ['./loan-data.component.css']
})
export class LoanDataComponent implements OnInit {

  loan: Array<Loan> = [];

  constructor(private loanservice:LoanService) { }

  ngOnInit(): void {
    this.loanservice.getLoan().subscribe((data:Loan[]) => {
      console.log(data);
      this.loan=data;
    });
  }

}
