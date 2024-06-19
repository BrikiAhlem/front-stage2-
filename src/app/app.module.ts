import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

import { PaginatorModule } from 'primeng/paginator';
import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';
import { NavComponent } from './nav/nav.component';
import { LogoComponent } from './logo/logo.component';
import { GalleriaModule } from 'primeng/galleria';
import { AceuilComponent } from './aceuil/aceuil.component';
import { FootreComponent } from './footer/footre.component';
import { ContactComponent } from './contact/contact.component';
import { CreerComptComponent } from './creer-compt/creer-compt.component';
import { OublierComponent } from './oublier/oublier.component';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { ConnectionComponent } from './connection/connection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplitterModule } from 'primeng/splitter';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OpinionComponent } from './opinion/opinion.component';




@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    Page2Component,
    NavComponent,
    LogoComponent,
    AceuilComponent,
    FootreComponent,
    ContactComponent,
    CreerComptComponent,
    OublierComponent,
    ConnectionComponent,
    DashboardComponent,
    OpinionComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 HttpClientModule,
 TableModule,FormsModule,PaginatorModule,BrowserAnimationsModule , GalleriaModule , PasswordModule , SplitterModule,PanelMenuModule  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }