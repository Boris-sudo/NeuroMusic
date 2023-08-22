import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css']
})
export class GenreCardComponent implements OnInit {
  @Input()
  public genre?: string;
  @Input()
  public background_img?: string;
  @Input()
  public text_color?: string;

  constructor() { }

  ngOnInit(): void {
    setTimeout(function(genre, text_color) {
      // document.getElementById('text'+genre)!.style.color=text_color!;
    }, 10, this.genre, this.text_color);
  }

}
