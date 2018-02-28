import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// servicios
import { SharedService } from './services/shared.service';
import { SidebarService } from './services/sidebar.service';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { APP_ROUTING } from './app.routes';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


// rutas



// Modulos
import { PagesModule } from './pages/pages.module';
import { PAGES_ROUTES } from './pages/pages.routes';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PagesModule
  ],
  providers: [SharedService, SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
