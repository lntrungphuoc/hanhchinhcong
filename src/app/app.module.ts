import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
import { DuBaoComponent } from './du-bao/du-bao.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { DatePipe, Location } from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: ThongKeComponent },
  { path: 'du-bao', component: DuBaoComponent },
  { path: 'thong-ke', component: ThongKeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    NavbarComponent,
    ThongKeComponent,
    DuBaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    DataTablesModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
