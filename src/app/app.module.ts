import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { DataTablesModule } from 'angular-datatables'

import {
  ButtonsModule,
  ModalModule
} from 'ngx-bootstrap'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,

    HttpClientModule,

    DataTablesModule,

    ButtonsModule,
    ModalModule,

    ModalModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
