
import { Component, OnInit } from '@angular/core';
import { KenticoService } from '../kentico.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  private subs = new Array<Subscription>();
  constructor(private kentico: KenticoService) { }

  assets = new Array<PictureData>();

  ngOnInit() {
    this.subs.push(this.kentico.getPictures().subscribe(response => {
      //console.log(response);
      const data = response.items;
      for (const i in data) {
        if (data[i].system.codename === '__pictures_page__') {
          for(var x in data[i].title.value) {
            var pictureData = new PictureData();
            pictureData.src = data[i].title.value[x].url;
            pictureData.alt = data[i].title.value[x].description;
            this.assets.push(pictureData);
          }

        }
      }

      //console.log(this.assets);
    }));
  }

}

class PictureData {
  src: string;
  alt: string;
}
