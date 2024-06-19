import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { PageComponent } from './page/page.component';
import { LogoComponent } from './logo/logo.component';
import { AceuilComponent } from './aceuil/aceuil.component';
import { ContactComponent } from './contact/contact.component';
import { CreerComptComponent } from './creer-compt/creer-compt.component';
import { OublierComponent } from './oublier/oublier.component';
import { ConnectionComponent } from './connection/connection.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'tous' , component: LogoComponent }  , 
  { path: 'kbir' , component: Page2Component }  , 
  { path: 'sghir' , component: PageComponent }  , 
  { path: 'ACC' , component: AceuilComponent }  ,
  { path: 'Contc' , component: ContactComponent }  ,
  { path: 'creer' , component: CreerComptComponent }  ,
  { path: 'oublier' , component: OublierComponent }  ,
  { path: 'conncet' , component: ConnectionComponent }  ,
  { path: 'admin' , component: DashboardComponent }  ,
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
