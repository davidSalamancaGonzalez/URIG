
import { Component, OnInit } from '@angular/core';
import { PhotoCollectionService } from '../../../services/photo-collection.service';
import { imageBulk } from '../../../shared/models/api-response';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {

  randomPhotos: imageBulk[] = [];

  constructor(private PC: PhotoCollectionService) { }

  ngOnInit(): void {
    this.PC.getPhotos().subscribe((data: imageBulk[]) => {
      this.randomPhotos = data;
    });  
  }

  nextPhotos(){
    this.randomPhotos = [];
    this.PC.getPhotos().subscribe((data: imageBulk[]) => {
      this.randomPhotos = data;
    }
    );
  }
}
