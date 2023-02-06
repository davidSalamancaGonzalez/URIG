import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { imageBulk } from '../shared/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class PhotoCollectionService {

  private baseApi : string = environment.API_URL;
  private random  : string = "photos/random?count=30";
  private accessKey : string = environment.ACCES_KEY;
  randomPhotos : imageBulk[] = [];

  constructor(private http : HttpClient) { 

  }


  getPhotos() {
    return this.http.get<imageBulk[]>(`${this.baseApi}${this.random}&client_id=${this.accessKey}`);
  } 

}

