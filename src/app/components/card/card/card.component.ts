import { Component, Input, OnInit } from '@angular/core';
import { imageBulk } from '../../../shared/models/api-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

 @Input() image! : imageBulk;

  constructor( private modalService: NgbModal) {
   }

  ngOnInit(): void {
  }

  likeImage(image : string){
    console.log(image);
  }

  openModal(content:any) { 
    this.modalService.open(content, {centered: true})
  }

}
