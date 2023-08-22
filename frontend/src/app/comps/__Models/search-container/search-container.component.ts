import {Component, Input, OnInit} from '@angular/core';
import {GenreList, MoodList} from "../../../services/GenerateMoodsService";

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  public moodList = MoodList;
  public genreList = GenreList;
  @Input()
  public searchValue:string='';

  constructor() { }

  ngOnInit(): void {
    setTimeout(function(moodList) {
      for (const mood of moodList)
        document.getElementById('card'+mood.name)!.style.background=mood.gradient!;

    }, 10, this.moodList);
  }

}
