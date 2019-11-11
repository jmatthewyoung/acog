import { MediaComponent } from './media/media.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FredasWordComponent } from './fredas-word/fredas-word.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { PicturesComponent } from './pictures/pictures.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'fredas-word', component: FredasWordComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'pictures', component: PicturesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
