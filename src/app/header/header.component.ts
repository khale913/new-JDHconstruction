import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener("window:scroll", ['$event']) onScrollEvent(event: any) {
    console.log(event);
    console.log('scrolling')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
