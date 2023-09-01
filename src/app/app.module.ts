import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './services/menu.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService,MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
