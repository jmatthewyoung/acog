import { LiveStream } from './../kenticoCloudModels/liveStream';
import { ArchivedSermon } from './../kenticoCloudModels/archivedSermon';
import { KenticoService } from './../kentico.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  sermons = new Array<ArchivedSermon>();
  streams = new Array<LiveStream>();
  activeTab: 'LIVE_STREAM' | 'SERMON_AUDIO_ARCHIVE' | '' = 'LIVE_STREAM';

  constructor(private kentico: KenticoService, public sanitizer: DomSanitizer) { }

  subs = new Array<Subscription>();

  ngOnInit() {
    this.subs.push(this.kentico.getArchivedSermons().subscribe(response => {
      console.log(response);
      this.sermons = response.items as ArchivedSermon[];
      console.log(this.sermons);
    }));
    this.subs.push(this.kentico.getLiveStreams().subscribe(response => {
      this.streams = response.items as LiveStream[];
      console.log(this.streams);
    }));
  }
}
