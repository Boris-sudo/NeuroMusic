import { Component, OnInit } from '@angular/core';
import { MoodList, GenreList } from "../../../services/GenerateMoodsService";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css', '../../../../styles.css']
})
export class StartPageComponent implements OnInit {
  public moodList = MoodList;
  public genreList = GenreList;
  public current_mood_num: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

}
