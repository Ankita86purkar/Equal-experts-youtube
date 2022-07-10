import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UIConstants } from 'src/constants/ui-constants';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public searchResults: any;

  constructor(private httpClient: HttpClient) { }

  public searchEntries(term): Observable<any>{
    const url = 'https://www.googleapis.com/youtube/v3/search?' + 'part=' + 'snippet'  + '&maxResults=' + '10' +  
    '&type=' + 'video' + '&q=' + term + '&key=' + UIConstants.API_KEY;
    if (term === '' ){
      return of(null);
    }else{
      return this.httpClient.get(url).pipe(
        map(response => {
          return this.searchResults = response['items'];
        })
      );
    }
    
  }

  public _searchEntries(term){
    return this.searchEntries(term);
  }
}
