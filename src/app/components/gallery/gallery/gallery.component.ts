
import { Component, OnInit } from '@angular/core';
import { PhotoCollectionService } from '../../../services/photo-collection.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {

  randomPhotos: any[] = [];

  constructor(private PC: PhotoCollectionService) { }

  ngOnInit(): void {
    this.PC.getPhotos().subscribe((data: any) => {
      console.log(data);
      this.randomPhotos = data;
    }
    );

  }

}
