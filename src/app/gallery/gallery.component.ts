import { Component, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
  })

  export class GalleryComponent {
    title = 'Our New Movies - Series and Shows';

    visibleImages: any[] = [];

    constructor(private imageService: ImageService) {
      this.visibleImages = this.imageService.getImages();
    }


  }
