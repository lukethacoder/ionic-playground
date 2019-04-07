import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InstagramService {
  url = 'https://www.instagram.com/lukesecombdigital/?__a=1';
  allData;

  constructor(private http: HttpClient) {}

  getImagesOld(): Observable<any> {
    console.log('run getImages');
    return this.http.get(this.url).pipe(map(results => console.log(results)));
  }

  getImages(): Observable<any> {
    console.log('run getImages');

    return this.http.get('assets/instagram.json').pipe(
      map((results: any) => {
        console.log('RAW: ', results.graphql.user.edge_owner_to_timeline_media.edges);
        let returnThis = results.graphql.user.edge_owner_to_timeline_media.edges;
        return returnThis;
      })
    );
  }
}
