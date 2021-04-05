import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { LoanService } from '../loan.service';
import { ReactiveFormsModule } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-home-loan-insert',
  templateUrl: './home-loan-insert.component.html',
  styleUrls: ['./home-loan-insert.component.css']
})
export class HomeLoanInsertComponent implements OnInit {

  firstLoanForm = new FormGroup({
    account_number:new FormControl(''),
    holder_name:new FormControl('')
  })

  secondLoanForm = new FormGroup({
    loan_Period:new FormControl(''),
    loan_Amount:new FormControl('')
  })

  thirdLoanForm = new FormGroup({
    property_Type:new FormControl(''),
    property_Address:new FormControl('')
  })

  loanPeriod:any;
  periodDisabled:boolean;

  constructor(private formBuilder: FormBuilder, private service:LoanService) { }

  ngOnInit(): void {
    this.firstLoanForm = this.formBuilder.group({
      account_number:['',Validators.required],
      holder_name:['',Validators.required]
    })

    this.thirdLoanForm = this.formBuilder.group({
      property_Type: ['', Validators.required],
      property_Address:['',Validators.required],
    })

    this.secondLoanForm = this.formBuilder.group({
    loan_Amount:['',Validators.required],
    loan_Period:['disabled:true',Validators.required],
  })
}
  propertyType=[
    {value:'apartment',name:'Single Apartment'},
    {value:'house',name:'Single House'},
    {value:'bunglow',name:'Bunglow'},
  ]

  loanAmount=[
    {value:'1000000', name:'10 Lakhs'},
    {value:'1500000', name:'15 Lakhs'},
    {value:'2000000', name:'20 Lakhs'},
    {value:'2500000', name:'25 Lakhs'},
  ]

  loanPeriod1=[
    {value:'4',name:'4 Years and 25k per month'},
    {value:'3',name:'3 Years and 30k per month'},
  ]

  loanPeriod2=[
    {value:'4',name:'4 Years and 35k per month'},
    {value:'3',name:'3 Years and 40k per month'},
  ]

  loanPeriod3=[
    {value:'4',name:'4 Years and 45k per month'},
    {value:'3',name:'3 Years and 50k per month'},
  ]

  loanPeriod4=[
    {value:'4',name:'4 Years and 55k per month'},
    {value:'3',name:'3 Years and 60k per month'},
  ]

  setPeriodDropdown(selectedAmount){

    this.periodDisabled=true;

    if(selectedAmount == 1000000){
      this.loanPeriod=this.loanPeriod1;
    }
    if(selectedAmount == 1500000){
      this.loanPeriod=this.loanPeriod2;
    }
    if(selectedAmount == 2000000){
      this.loanPeriod=this.loanPeriod3;
    }
    if(selectedAmount == 2500000){
      this.loanPeriod=this.loanPeriod4;
    }
  }

  applyLoan(){
    var loanData={
      accountNumber:this.firstLoanForm.get('account_number').value,
      applicantName:this.firstLoanForm.get('holder_name').value,
      loanAmount:this.secondLoanForm.get('loan_Amount').value,
      loanPeriod:this.secondLoanForm.get('loan_Period').value,
      propertyType:this.thirdLoanForm.get('property_Type').value,
      propertyAddress:this.thirdLoanForm.get('property_Address').value
    }
    this.service.sendHomeLoanData(loanData).subscribe(rest=>{

    })
}


}
