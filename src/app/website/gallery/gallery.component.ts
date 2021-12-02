import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
imgSrc: any
  imgWidth: any;
  imgHeight: any;

  constructor() {
    
   }

  ngOnInit(): void {
  }

  openImgs(event: any){
    var target = event.target || event.srcElement || event.currentTarget
    var img = target.id
    this.imgSrc = "assets/images/gallery/"+img+".jpg"
    this.imgWidth = "auto"
    this.imgHeight = "auto"
  }

}

