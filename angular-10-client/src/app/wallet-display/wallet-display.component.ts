import { Component, OnInit } from '@angular/core';
import { Wallet } from '../wallet';
import { WalletService } from '../_services/wallet.service';

@Component({
  selector: 'app-wallet-display',
  templateUrl: './wallet-display.component.html',
  styleUrls: ['./wallet-display.component.css']
})
export class WalletDisplayComponent implements OnInit {

  waccount: Array<Wallet> = [];
  constructor(private _service:WalletService) { }

  ngOnInit(): void {
    this._service.getWallet().subscribe((data:Wallet[]) => {
      console.log(data);
      this.waccount=data;
    });
  }

}
