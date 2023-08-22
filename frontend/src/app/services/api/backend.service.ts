import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BackendApiService, Configuration } from "../../../generated";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public backendApiService: BackendApiService;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.backendApiService = new BackendApiService(httpClient, environment.apiBaseUrl, new Configuration());
  }


}
