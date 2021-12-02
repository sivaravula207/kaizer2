import { Component, OnInit } from '@angular/core';
import { updatesArr } from '../COMMON/products'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  updatesArray:any
  constructor() { }

  ngOnInit(): void {
    this.updatesArray = updatesArr
    
  }

}
