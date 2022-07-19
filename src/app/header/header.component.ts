import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { windowCount, windowWhen } from 'rxjs';
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
    // if (window.pageYOffset >= 0 || window.scrollY >= 0) {
    //   this.sticky = true;
    // } else {
    //   this.sticky = false;
    // }

    if (window.pageYOffset >= 90 || window.scrollY >= 90) {
      this.lessPadding = true;
    } else {
      this.lessPadding = false;
    }
  }
  lessPadding: boolean = false;
  sticky: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
