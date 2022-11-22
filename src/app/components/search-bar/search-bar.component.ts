import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() newSearch = new EventEmitter<string>();

  newSearchMovie(title : string) {
    this.newSearch.emit(title);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
