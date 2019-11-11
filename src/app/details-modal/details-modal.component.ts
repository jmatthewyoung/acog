import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {

  @Input() title: string;
  @Input() imageSrc?: string;
  @Input() imageAlt?: string;
  @Input() details: string;

  constructor() { }

  ngOnInit() {
  }

}
