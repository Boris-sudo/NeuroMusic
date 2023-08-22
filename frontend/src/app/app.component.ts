import {Component, OnInit} from '@angular/core';
import {RoutingService} from "./services/routing/routing.service";

// import { slideAnimation } from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'NeuroMusic';

  constructor(
    public router: RoutingService,
  ) {}

  ngOnInit(): void {

    if (localStorage.getItem('route')==null)
      localStorage.setItem('route','');
    for(const route of this.router.routes) {
      if (this.router.sameRoute(route.path!))
        document.getElementById(route.component_id!)!.style.display='block';
      else
        document.getElementById(route.component_id!)!.style.display='none';
    }
  }
}
