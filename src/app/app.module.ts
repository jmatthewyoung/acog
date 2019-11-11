import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ContactComponent } from './contact/contact.component';
import { FredasWordComponent } from './fredas-word/fredas-word.component';
import { NgbModule, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { StaffCardComponent } from './about-us/staff-card/staff-card.component';
import { MinistryCardComponent } from './about-us/ministry-card/ministry-card.component';
import { DetailsModalComponent } from './details-modal/details-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MediaComponent,
    AboutUsComponent,
    EventsComponent,
    PicturesComponent,
    ContactComponent,
    FredasWordComponent,
    StaffCardComponent,
    MinistryCardComponent,
    DetailsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right'
    }),
    FontAwesomeModule,
    LayoutModule
  ],
  providers: [
    NgbAccordionConfig
  ],
  entryComponents: [
    DetailsModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
