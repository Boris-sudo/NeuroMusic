import { Component, OnInit } from '@angular/core';
import { NavigationElements } from "../../../services/routing/NavigationElements";
import {RoutingService} from "../../../services/routing/routing.service";
import {GenreList, MoodList} from "../../../services/GenerateMoodsService";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public searchValue = "";
  public moodList = MoodList;
  public genreList = GenreList;

  constructor(
    public router: RoutingService,
  ) { }

  ngOnInit(): void {
    document.addEventListener("keydown", ev => {
      if (ev.key=='Escape') this.close_menu();
    })
  }

  open_menu() {
    let menu= document.getElementById('small-src-menu')!;
    let svg1= document.getElementById('opener-svg-1')!;
    let svg2= document.getElementById('opener-svg-2')!;

    menu.style.display='block';
    setTimeout(function() {
      menu.style.width='100vw';
      svg1.style.transform='rotate(-45deg) translateY(16px) translateX(-22px)';
      svg2.style.transform='rotate(45deg) translateY(-26px) translateX(10px)';
    }, 10)
  }
  close_menu() {
    let menu=document.getElementById('small-src-menu')!;
    let svg1= document.getElementById('opener-svg-1')!;
    let svg2= document.getElementById('opener-svg-2')!;

    menu.style.width='0';
    svg1.style.transform='rotate(0) translateY(0) translateX(0)';
    svg2.style.transform='rotate(0) translateY(0) translateX(0)';
    setTimeout(function() {
      menu.style.display='none';
    }, 500)
  }
  interact_menu() {
    let menu=document.getElementById('small-src-menu')!;
    console.log(menu);
    if (menu.style.width=='' || menu.style.width=='0' || menu.style.width=='0px') this.open_menu();
    else this.close_menu();
  }
  navigate(link: string) {
    this.close_menu();
    this.router.navigate(link);
  }

  show_background_search() {

  }
  hide_background_search() {

  }

  protected readonly NavigationElements = NavigationElements;
  protected readonly MoodList = MoodList;
  protected readonly GenreList = GenreList;
}
