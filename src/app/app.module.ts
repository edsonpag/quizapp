import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastComponent } from './components/toast/toast.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizService } from './services/quiz.service';
import { ToastService } from './services/app-toast.service';
import { DepoimentsService } from './services/depoiments.service';
import { SalesNotificationService } from './services/sales-notification.service';
import { environment } from '../environments/environment';
import { LeadService } from './services/lead.service';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbToastModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    ToastComponent
  ],
  providers: [
    QuizService,
    DepoimentsService,
    SalesNotificationService,
    LeadService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
