import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mood-card',
  templateUrl: './mood-card.component.html',
  styleUrls: ['./mood-card.component.css', '../../../../styles.css']
})
export class MoodCardComponent implements OnInit {
  @Input()
  public mood?: string;
  @Input()
  public color_scheme?: string;

  constructor() { }

  ngOnInit(): void {
    setTimeout(function(mood, color_scheme) {
      document.getElementById('card'+mood)!.style.background=color_scheme!;
    }, 10, this.mood, this.color_scheme);
  }

}
