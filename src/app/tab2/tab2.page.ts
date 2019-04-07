import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DomainsService } from '../services/domains.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  results: Observable<any>;
  searchTerm = '';

  constructor(private domainsService: DomainsService) {}

  ngOnInit() {}

  searchChanged() {
    this.results = this.domainsService.getListOfUrls(this.searchTerm);

    // this.results.subscribe(res => {
    //   console.log(res);
    // });
  }
}
