import {Component, Input, OnInit, AfterContentInit, AfterViewInit} from '@angular/core';
import {GenreList, MoodList} from "../../../services/GenerateMoodsService";
import {catchError} from "rxjs";

@Component({
  selector: 'app-mobile-search-container',
  templateUrl: './mobile-search-container.component.html',
  styleUrls: ['./mobile-search-container.component.css']
})
export class MobileSearchContainerComponent implements OnInit, AfterViewInit {
  public moodList=MoodList;
  public genreList=GenreList;
  @Input()
  public mobileSearchValue:string='';

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    for (let i = 0; i < this.moodList.length; i++) {
      document.getElementById('mobile-search-mood-card'+i)!.style.background=this.moodList[i].gradient;
    }
  }


  getMoodParam() {
    let count=0;
    for (let mood of this.moodList) {
      let search = this.mobileSearchValue.toLowerCase();
      count += mood.name.toLowerCase().search(search) == -1? 0 : 1;
    }
    return count!=0;
  }
  getGenreParam() {
    let count=0;
    for (let genre of this.genreList) {
      let search = this.mobileSearchValue.toLowerCase();
      count += genre.name.toLowerCase().search(search) == -1? 0 : 1;
    }
    return count!=0;
  }
}
