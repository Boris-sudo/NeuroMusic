import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { StartPageComponent } from './comps/__Pages/start-page/start-page.component';
import { NotFoundPageComponent } from './comps/__Pages/not-found-page/not-found-page.component';
import { HttpClient, HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { TopBarComponent } from './comps/__Nav-Bar/top-bar/top-bar.component';
import { LeftBarComponent } from './comps/__Nav-Bar/left-bar/left-bar.component';
import { MobileSearchPageComponent } from './comps/__Pages/mobile-search-page/mobile-search-page.component';
import { MoodCardComponent } from './comps/__Models/mood-card/mood-card.component';
import { GenreCardComponent } from './comps/__Models/genre-card/genre-card.component';
import { LoginPageComponent } from './comps/__Pages/login-page/login-page.component';
import { SearchPipe } from './pipes/search.pipe';
import {FormsModule} from "@angular/forms";
import { SearchContainerComponent } from './comps/__Models/search-container/search-container.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    NotFoundPageComponent,
    TopBarComponent,
    LeftBarComponent,
    MobileSearchPageComponent,
    MoodCardComponent,
    GenreCardComponent,
    LoginPageComponent,
    SearchPipe,
    SearchContainerComponent
  ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		HttpClientXsrfModule.withOptions({
			cookieName: 'csrftoken',
			headerName: 'X-CSRFToken',
		}),
		FormsModule,
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
