import { Component, OnInit } from '@angular/core';
import {Account } from '../account'
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-account-display',
  templateUrl: './account-display.component.html',
  styleUrls: ['./account-display.component.css']
})
export class AccountDisplayComponent implements OnInit {

 account: Array<Account> = [];


  constructor(private _service:AccountService) { }

  ngOnInit(): void {
    this._service.getAccountOfUser().subscribe((data:Account[]) => {
      console.log(data);
      this.account=data;
    });
  }

}
