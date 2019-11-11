import { Ministry } from './../../kenticoCloudModels/ministry';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalComponent } from 'src/app/details-modal/details-modal.component';

@Component({
  selector: 'app-ministry-card',
  templateUrl: './ministry-card.component.html',
  styleUrls: ['./ministry-card.component.scss']
})
export class MinistryCardComponent implements OnInit {

  @Input() ministry: Ministry;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(DetailsModalComponent);
    modalRef.componentInstance.title = this.ministry.name.value;
    modalRef.componentInstance.details = this.ministry.information.value;
    // modalRef.componentInstance.name = 'World';
  }

}
