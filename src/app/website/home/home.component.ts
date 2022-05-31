import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
    var popupElement = document.getElementById('popupOpen') as HTMLElement
    popupElement.click()
  }

  
  register(){
    window.open("https://rxeventslive.in/sinsanglad/", "_blank");
  }
}
