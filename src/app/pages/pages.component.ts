import { Component, OnInit } from '@angular/core';

declare function initPage(): void;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  ngOnInit(): void {
    initPage();
  }

}
