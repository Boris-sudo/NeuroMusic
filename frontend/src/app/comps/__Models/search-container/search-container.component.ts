import { Component, Input, OnInit } from '@angular/core';
import { GenreList, MoodList, Mood } from "../../../services/GenerateMoodsService";


@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  public moodList=MoodList;
  @Input() public selectedMoods:Mood[] = [];
  public genreList = GenreList;
  @Input() public searchValue:string='';
  @Input() public mood_param = true;
  @Input() public genre_param=true;

  constructor(
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      for (const mood of this.moodList)
        document.getElementById('laptop-search-mood-card' + mood.name)!.style.background = mood.gradient!;
    }, 10)
  }

  isContains(val:Mood) {
    for (const mood of this.selectedMoods)
      if (mood==val) return true;
    return false;
  }
}
