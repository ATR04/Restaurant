import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', 
    redirectTo: 'register', 
    pathMatch: 'full' 
  },
  { path: 'register', 
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },{
    path: 'home',
    component: HomeComponent
  },{
    path: 'contact',
    component: ContactUsComponent
  }

];

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
