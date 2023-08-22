import {Injectable} from '@angular/core';

interface Routes {
  path?: string;
  component_id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  public routes: Routes[] = [
    {path: '', component_id: 'app-start-page',},
    {path: '/search', component_id: 'app-mobile-search',},
    {path: '/login', component_id: 'app-login',},
    {path: '**', component_id: 'app-not-found-page',},
  ];

  constructor() {
  }

  getCompId(active_route: string): string {
    for (const route of this.routes)
      if (route.path == active_route) return route.component_id!;
    return 'app-not-found-page';
  }

  getRoute(): string {
    return localStorage.getItem('route')!;
  }

  isRouteExist(link: string): boolean {
    for (const route of this.routes)
      if (route.path==link)
        return true;
    return false;
  }

  sameRoute(link: string): boolean {
    let result=this.getRoute()==link;
    return result;
  }

  changeComps(prev: string, next: string) {
    let prevEl:HTMLElement=document.getElementById(prev)!;
    let nextEl:HTMLElement=document.getElementById(next)!;
    let filter:HTMLElement=document.getElementById('background-routing-filter')!;

    filter.style.display='block';

    // animation of filter appearance
    setTimeout(function() {
      filter.style.background='rgba(17,17,17,0.9)';

      // animation of filter disappearance
      setTimeout(function() {
        filter.style.background='rgba(0,0,0,0)';
        prevEl.style.display='none';
        nextEl.style.display='block';

        // components changing
        setTimeout(function() {
          filter.style.display='none';
        }, 1000)
      }, 700)
    }, 10)
  }

  navigate(link: string) {
    let active_route = this.getRoute();
    let active_component_id = this.getCompId(active_route);
    let next_route=link;
    let next_component_id = this.getCompId(link);

    if (link[0] != '/') {
      next_route='';
      if (active_route == '') {
        window.scrollTo({
          top: document.getElementById(link)!.offsetTop - 100,
          behavior: 'smooth',
        });
      } else {
        this.changeComps(active_component_id, 'app-start-page');
      }
    } else {
      if (!this.isRouteExist(link)) link='**', next_route=link;
      if (active_route == link) return;

      this.changeComps(active_component_id, next_component_id);
    }

    localStorage.removeItem('route');
    localStorage.setItem('route', next_route);
  }
}
