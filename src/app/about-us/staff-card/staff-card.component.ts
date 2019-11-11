import { Component, OnInit, Input } from '@angular/core';
import { Staff } from '../../kenticoCloudModels/staff';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalComponent } from 'src/app/details-modal/details-modal.component';

@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss']
})
export class StaffCardComponent implements OnInit {

  @Input() staffMember: Staff;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(DetailsModalComponent);
    modalRef.componentInstance.title = this.staffMember.name.value;
    modalRef.componentInstance.details = this.staffMember.bio.resolveHtml();
    modalRef.componentInstance.imageSrc = this.staffMember.picture.value.length > 0 ? this.staffMember.picture.value[0].url : '';
    modalRef.componentInstance.imageAlt = this.staffMember.picture.value.length > 0 ? this.staffMember.picture.value[0].description : '';
    // modalRef.componentInstance.name = 'World';
  }

}
