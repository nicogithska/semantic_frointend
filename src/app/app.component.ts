import { Component, OnInit } from '@angular/core';
import { SeamnticSearch } from './semanticsearch/semanticsearch';
import { Profile } from './semanticsearch/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SemanticSearch';
  profiles: Profile[];

  constructor(private semanticsearch: SeamnticSearch) { }

  ngOnInit(): void {
    this.profiles = this.semanticsearch.search();
  }
}
