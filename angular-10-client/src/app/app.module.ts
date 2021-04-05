import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { LoanComponent } from './loanInsert/loan.component';

import { HomeLoanComponent } from './home-loan/home-loan.component';
import { HomeLoanInsertComponent } from './home-loan-insert/home-loan-insert.component';
import { HomeLoanDataComponent } from './home-loan-data/home-loan-data.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanDataComponent } from './loan-data/loan-data.component';
import { AccountComponent } from './account/account.component';
import { AccountDisplayComponent } from './account-display/account-display.component';

import { DebitorderInsertComponent } from './debitorder-insert/debitorder-insert.component';
import { DebitorderDataComponent } from './debitorder-data/debitorder-data.component';
import { WalletCreationComponent } from './wallet-creation/wallet-creation.component';
import { WalletDisplayComponent } from './wallet-display/wallet-display.component';
import { WallettransactionComponent } from './wallettransaction/wallettransaction.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    LoanComponent,
    LoanDataComponent,
    HomeLoanDataComponent,
    HomeLoanComponent,
    HomeLoanInsertComponent,
    HomeLoanDataComponent,
    AccountComponent,
    AccountDisplayComponent,
    DebitorderInsertComponent,
    DebitorderDataComponent,
    WalletCreationComponent,
    WalletDisplayComponent,
    WallettransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
