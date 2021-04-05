

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { BoardAdminComponent } from './board-admin/board-admin.component';
import { LoanComponent } from './loanInsert/loan.component';
import { HomeLoanInsertComponent } from './home-loan-insert/home-loan-insert.component';
import { HomeLoanDataComponent } from './home-loan-data/home-loan-data.component';
import { LoanDataComponent } from './loan-data/loan-data.component';
import { AccountComponent } from './account/account.component';
import { AccountDisplayComponent } from './account-display/account-display.component';
import { DebitorderInsertComponent } from './debitorder-insert/debitorder-insert.component';
import { DebitorderDataComponent } from './debitorder-data/debitorder-data.component';
import {WalletCreationComponent} from './wallet-creation/wallet-creation.component'
import {WalletDisplayComponent} from './wallet-display/wallet-display.component'
import { WallettransactionComponent } from './wallettransaction/wallettransaction.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'loan',component:LoanComponent},
  {path:'homeloaninsert',component:HomeLoanInsertComponent},
  {path:'homeloandata',component:HomeLoanDataComponent},
  {path:'loandata',component:LoanDataComponent},
  {path:'addaccount',component:AccountComponent},
  {path:'account',component:AccountDisplayComponent},
  {path:'adddebitorder',component:DebitorderInsertComponent},
  {path:'displaydebitorder',component:DebitorderDataComponent},
  {path:'wallet',component:WalletCreationComponent},
  {path:'walletdisplay',component:WalletDisplayComponent},
  {path:'AddIntoWallet',component:WallettransactionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
