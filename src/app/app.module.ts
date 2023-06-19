import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: ThongKeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftSidebarComponent,
    ThongKeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
