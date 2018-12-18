import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EmailComponent } from './email/email.component';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { HomeDetailsComponent } from './home-details/home-details.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,
children : [
  {path:"hemeemployee",component:HomeEmployeeComponent},
  {path:"homedetails",component:HomeDetailsComponent}
]
},
  {path:"contact",component:ContactComponent},
  {path:"email",component:EmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
