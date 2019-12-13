import { LiveStream } from './../kenticoCloudModels/liveStream';
import { ArchivedSermon } from './../kenticoCloudModels/archivedSermon';
import { KenticoService } from './../kentico.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { faChevronUp, faChevronDown, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  sermons = new Array<ArchivedSermon>();
  streams = new Array<LiveStream>();
  activeTab: 'LIVE_STREAM' | 'SERMON_AUDIO_ARCHIVE' | '' = 'LIVE_STREAM';

  filteredSermons = new Array<any>();

  constructor(private kentico: KenticoService, public sanitizer: DomSanitizer) { }

  subs = new Array<Subscription>();

  accSpeakerPanelIndexes = new Array<boolean>();

  accDatePanels = new Array<any>();

  ngOnInit() {
    this.subs.push(this.kentico.getArchivedSermons().subscribe(response => {
      console.log(response);
      this.sermons = response.items as ArchivedSermon[];
      console.log(this.sermons);

      const speakers = new Array<string>();
      for (const i in this.sermons) {
        if (this.sermons[i]) {
          const speaker = this.sermons[i].speaker.value;
          if (!speakers.includes(speaker)) {
            speakers.push(speaker);
          }
        }
      }

      const sermonsFilteredBySpeaker = new Array<any>();
      // tslint:disable:forin
      for (const i in speakers) {
        const speakersSermons = new Array<ArchivedSermon>();
        if (speakers[i]) {
          for (const j in this.sermons) {
            if (this.sermons[j].speaker.value === speakers[i]) {
              speakersSermons.push(this.sermons[j]);
            }
          }
        }
        sermonsFilteredBySpeaker.push({
          speaker: speakers[i],
          sermons: speakersSermons
        });
      }

      for (const i in sermonsFilteredBySpeaker) {
        const sermonDates = new Array<any>();
        for (const j in sermonsFilteredBySpeaker[i].sermons) {
          const date = sermonsFilteredBySpeaker[i].sermons[j].dateRecorded.value.getFullYear();
          if (!sermonDates.includes(date)) {
            sermonDates.push(date);
          }
        }

        const sermonsFilteredByDate = new Array<any>();

        for (const j in sermonDates) {
          const datesSermons = new Array<ArchivedSermon>();
          for (const k in sermonsFilteredBySpeaker[i].sermons) {
            if (sermonsFilteredBySpeaker[i].sermons[k].dateRecorded.value.getFullYear() === sermonDates[j]) {
              datesSermons.push(sermonsFilteredBySpeaker[i].sermons[k]);
            }
          }

          sermonsFilteredByDate.push({
            date: sermonDates[j],
            sermons: datesSermons
          });
        }
        this.filteredSermons.push({
          speaker: sermonsFilteredBySpeaker[i].speaker,
          sermonDates: sermonsFilteredByDate
        });
      }

      for (const i in this.filteredSermons) {
        this.accSpeakerPanelIndexes.push(false);

        const dataIndexes = new Array<boolean>();
        for(const j in this.filteredSermons[i].sermonDates){
          dataIndexes.push(false);
        }
        this.accDatePanels.push({
          speaker: this.filteredSermons[i].speaker,
          indexes: dataIndexes
        });
      }
      console.log(this.filteredSermons);
      console.log(this.accDatePanels);
    }));
    this.subs.push(this.kentico.getLiveStreams().subscribe(response => {
      this.streams = response.items as LiveStream[];
      // console.log(this.streams);
    }));
  }

  toggleSpeakerPanelIndex(index: number) {
    this.accSpeakerPanelIndexes[index] = !this.accSpeakerPanelIndexes[index];
  }

  toggleDatesPanelIndex(speaker: string, index: number) {
    for(const i in this.accDatePanels){
      if(this.accDatePanels[i].speaker === speaker) {
        this.accDatePanels[i].indexes[index] = !this.accDatePanels[i].indexes[index];
      }
    }
  }

  getDatesPanelIndex(speaker: string, index: number) {
    for(const i in this.accDatePanels){
      if(this.accDatePanels[i].speaker === speaker) {
        return this.accDatePanels[i].indexes[index];
      }
    }
  }
}
