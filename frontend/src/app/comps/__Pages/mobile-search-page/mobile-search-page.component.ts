import { Component, OnInit } from '@angular/core';
import {GenreList, MoodList} from "../../../services/GenerateMoodsService";

@Component({
  selector: 'app-mobile-search-page',
  templateUrl: './mobile-search-page.component.html',
  styleUrls: ['./mobile-search-page.component.css', '../../../../styles.css']
})
export class MobileSearchPageComponent implements OnInit {
  public mobileSearchValue: string='';
  public moodList=MoodList;
  public genreList=GenreList;

  constructor() { }

  ngOnInit(): void {
  }
}
