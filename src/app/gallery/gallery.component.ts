import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  imgList: any[] = [];

  constructor() {
    this.imgList = [
      {id: 0, path: './assets/svg/d1.svg'},
      {id: 1, path: './assets/svg/d2.svg'},
      {id: 2, path: './assets/svg/d3.svg'}
    ];
  }

  ngOnInit(): void {
  }

}
