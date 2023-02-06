import { Component, Input, OnInit } from '@angular/core';
import { imageBulk } from '../../../shared/models/api-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() image!: imageBulk;

  constructor(private modalService: NgbModal) { }

  openModal(content: any) {
    this.modalService.open(content, { size: 'md' });
  }

}
