import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DomainsService {
  url = 'http://api.domainsdb.info/search';

  constructor(private http: HttpClient) {}

  searchData(id): Observable<any> {
    return this.http.get(`${this.url}?query=${encodeURI(id)}`).pipe(
      map(results => {
        console.log('RAW: ', results);
        return results['Search'];
      })
    );
  }

  getListOfUrls(id: any): Observable<any> {
    console.log('run getImages');
    return this.http.get(`${this.url}?query=${encodeURI(id)}`).pipe(
      map((results: any) => {
        console.log('RAW: ', results.domains);
        let returnThis = results.domains;
        return returnThis;
      })
    );
  }
}
