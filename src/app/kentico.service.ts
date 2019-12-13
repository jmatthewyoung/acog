import { Pictures } from './kenticoCloudModels/pictures';
import { LiveStream } from './kenticoCloudModels/liveStream';
import { ArchivedSermon } from './kenticoCloudModels/archivedSermon';
import { Injectable } from '@angular/core';
import { TypeResolver, DeliveryClient, SortOrder } from '@kentico/kontent-delivery';
import { Staff } from './kenticoCloudModels/staff';
import { Ministry } from './kenticoCloudModels/ministry';
import { HomePage } from './kenticoCloudModels/homePage';
import { Beliefs } from './kenticoCloudModels/beliefs';
import { FredasWord } from './kenticoCloudModels/fredasWord';
import { ChurchHistory } from './kenticoCloudModels/churchHistory';

@Injectable({
  providedIn: 'root'
})
export class KenticoService {

  private deliveryClient = new DeliveryClient({
    projectId: 'a206d782-2ef7-0084-afdb-380cc0bd5039',
    typeResolvers: [
      new TypeResolver('archived_sermon', () => new ArchivedSermon()),
      new TypeResolver('live_stream', () => new LiveStream()),
      new TypeResolver('staff', () => new Staff()),
      new TypeResolver('ministry', () => new Ministry()),
      new TypeResolver('home_page', () => new HomePage()),
      new TypeResolver('beliefs', () => new Beliefs()),
      new TypeResolver('freda_s_word_bulletin', () => new FredasWord()),
      new TypeResolver('church_history', () => new ChurchHistory()),
      new TypeResolver('pictures_page', () => new Pictures()),
    ]
  });

  constructor() { }

  getPictures() {
     return this.deliveryClient.items().type('pictures_page').toObservable();
  }

  getLiveStreams() {
    return this.deliveryClient.items().type('live_stream').toObservable();
  }

  getArchivedSermons() {
    return this.deliveryClient.items().type('archived_sermon').toObservable();
  }

  getStaff() {
    return this.deliveryClient.items().type('staff').toObservable();
  }

  getMinistries() {
    return this.deliveryClient.items().type('ministry').toObservable();
  }

  getHomePage() {
    return this.deliveryClient.items().type('home_page').toObservable();
  }

  getBeliefs() {
    return this.deliveryClient.items().type('beliefs').toObservable();
  }

  getHistory() {
    return this.deliveryClient.items().type('church_history').toObservable();
  }

  getFredasWordsBulletins() {
    return this.deliveryClient.items().type('freda_s_word_bulletin').toObservable();
  }
}
