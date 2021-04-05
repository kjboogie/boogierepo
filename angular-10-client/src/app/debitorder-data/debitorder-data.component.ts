import { Component, OnInit } from '@angular/core';
import { Debitorder } from '../debitorder';
import { DebitorderService } from '../_services/debitorder.service';

@Component({
  selector: 'app-debitorder-data',
  templateUrl: './debitorder-data.component.html',
  styleUrls: ['./debitorder-data.component.css']
})
export class DebitorderDataComponent implements OnInit {


  deorder: Array<Debitorder> = [];
  constructor(private _service: DebitorderService) { }

  ngOnInit(): void {
    this._service.debitorderSendDetails().subscribe((data:Debitorder[]) => {
      console.log(data);
      this.deorder=data;

    })
  }

}
