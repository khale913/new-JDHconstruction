import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { windowCount } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener("window:scroll", ['$event']) onScrollEvent(event: any) {
    // console.log(event);
    // console.log(window.pageYOffset)
    console.log(window.scrollY)
    if (window.pageYOffset >= 45 || window.scrollY >= 45) {
      this.lessPadding = true;
    } else {
      this.lessPadding = false;
    }
  }
  lessPadding: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
