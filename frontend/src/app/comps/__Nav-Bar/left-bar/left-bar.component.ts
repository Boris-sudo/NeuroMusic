import { Component, OnInit } from '@angular/core';
import { NavigationElements } from "../../../services/routing/NavigationElements";
import { RoutingService } from "../../../services/routing/routing.service";

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  constructor(
    public router: RoutingService,
  ) { }

  ngOnInit(): void {
  }
  navigate(link: string) {
    this.router.navigate(link);
  }


  protected readonly NavigationElements = NavigationElements;
}
