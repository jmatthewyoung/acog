import { Component, OnInit } from '@angular/core';
import { FredasWord } from '../kenticoCloudModels/fredasWord';
import { KenticoService } from '../kentico.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalComponent } from '../details-modal/details-modal.component';

@Component({
  selector: 'app-fredas-word',
  templateUrl: './fredas-word.component.html',
  styleUrls: ['./fredas-word.component.scss']
})
export class FredasWordComponent implements OnInit {

  constructor(private kentico: KenticoService, private modalService: NgbModal) { }

  fredasWordBulletins = new Array<FredasWord>();
  private subs = new Array<Subscription>();

  ngOnInit() {
    this.subs.push(this.kentico.getFredasWordsBulletins().subscribe(response => {
      console.log(response);
      const data = response.items;
      this.fredasWordBulletins = new Array<FredasWord>();
      for (const i in data) {
        this.fredasWordBulletins.push(data[i] as FredasWord);
      }
      console.log(this.fredasWordBulletins);
    }));
  }

  open(title, details) {
    const modalRef = this.modalService.open(DetailsModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.details = details;
  }
}
