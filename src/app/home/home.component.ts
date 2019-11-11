import { Component, OnInit } from '@angular/core';
import { KenticoService } from '../kentico.service';
import { Subscription } from 'rxjs';
import { HomePage } from '../kenticoCloudModels/homePage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private kentico: KenticoService) { }

  homePage: HomePage;

  private subs = new  Array<Subscription>();

  ngOnInit() {
    this.subs.push(this.kentico.getHomePage().subscribe(response => {
     console.log(response);
     const data = response.items;
     for (const i in data) {
        if (data[i].system.codename === '__home_page__') {
          this.homePage = data[i] as HomePage;
        }
      }
     console.log(this.homePage);
    }));
  }

}
