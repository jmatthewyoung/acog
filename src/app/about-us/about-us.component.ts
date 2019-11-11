import { ChurchHistory } from './../kenticoCloudModels/churchHistory';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { KenticoService } from '../kentico.service';
import { Staff } from '../kenticoCloudModels/staff';
import { Ministry } from '../kenticoCloudModels/ministry';
import { Beliefs } from '../kenticoCloudModels/beliefs';
import { NgbAccordionConfig, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { faChevronUp, faChevronDown, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { state } from '@angular/animations';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy {

  constructor(private kentico: KenticoService,
              private config: NgbAccordionConfig,
              private breakpointObserver: BreakpointObserver,
              private carouselConfig: NgbCarouselConfig) {
    carouselConfig.showNavigationIndicators = false;
    carouselConfig.interval = 0;
  }

  staff = new Array<Staff>();
  staffPages = new Array<Staff[]>();
  ministries = new Array<Ministry>();
  history: ChurchHistory;
  beliefs: Beliefs;
  accPanelIndexes = [false, false, false, false];
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  innerWidth: number;
  private subs = new Array<Subscription>();

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.subs.push(this.kentico.getStaff().subscribe(response => {
      this.staff = response.items as Staff[];

      if (this.innerWidth < 576) {
        this.staffPages = this.buildDisplayArray(this.staff, 1);
      } else if (this.innerWidth < 768) {
        this.staffPages = this.buildDisplayArray(this.staff, 2);
      } else if (this.innerWidth < 992) {
        this.staffPages = this.buildDisplayArray(this.staff, 3);
      } else {
        this.staffPages = this.buildDisplayArray(this.staff, 4);
      }

      this.subs.push(this.breakpointObserver.observe('(max-width: 576px)').subscribe(result => {
        const matches = this.getMatches(result);
        if (matches) {
          this.staffPages = this.buildDisplayArray(this.staff, 1);
        }
      }));
      this.subs.push(this.breakpointObserver.observe('(min-width: 577px),(max-width: 768px)').subscribe(result => {
        const matches = this.getMatches(result);
        if (matches) {
          this.staffPages = this.buildDisplayArray(this.staff, 2);
        }
      }));
      this.subs.push(this.breakpointObserver.observe('(max-width: 992px),(min-width: 769px)').subscribe(result => {
        const matches = this.getMatches(result);
        if (matches) {
          this.staffPages = this.buildDisplayArray(this.staff, 3);
        }
      }));
      this.subs.push(this.breakpointObserver.observe('(min-width: 993px)').subscribe(result => {
        const matches = this.getMatches(result);
        if (matches) {
          this.staffPages = this.buildDisplayArray(this.staff, 4);
        }
      }));
    }));


    this.subs.push(this.kentico.getMinistries().subscribe(response => {
      // console.log(response);
      this.ministries = response.items as Ministry[];
    }));

    this.subs.push(this.kentico.getHistory().subscribe(response => {
      // console.log(response);
      const data = response.items;
      for (const i in data) {
        if (data[i].system.codename === '__history__') {
          this.history = data[i] as ChurchHistory;
        }
      }
    }));

    this.subs.push(this.kentico.getBeliefs().subscribe(response => {
      // console.log(response);
      const data = response.items;
      for (const i in data) {
        if (data[i].system.codename === '__beliefs__') {
          this.beliefs = data[i] as Beliefs;
        }
      }
    }));

  }

  buildDisplayArray(arrayToParse: any[], itemsPerArray: number): any[][] {
    const returned = new Array<any[]>();

    let subArray = new Array<any>();
    if (arrayToParse.length > 0) {
      subArray.push(arrayToParse[0]);
    }

    for (let i = 1; i < arrayToParse.length; i++) {
      if (i % itemsPerArray === 0) {
        returned.push(subArray);
        subArray = new Array<any>();
      }
      subArray.push(arrayToParse[i]);
    }
    returned.push(subArray);

    return returned;
  }

  togglePanelIndex(index: number) {
    this.accPanelIndexes[index] = !this.accPanelIndexes[index];
  }

  ngOnDestroy() {
    // tslint:disable-next-line:forin
    for (const i in this.subs) {
      this.subs[i].unsubscribe();
    }
  }

  getMatches(result: BreakpointState): boolean {
    let matches = true;
    for (const i in result.breakpoints) {
      if (!result.breakpoints[i]) {
        matches = false;
      }
    }
    return matches;
  }
}
