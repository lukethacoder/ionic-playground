import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { InstagramService } from '../services/instagram.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  results: Observable<any>;

  constructor(private instagramService: InstagramService) {}

  ngOnInit() {
    this.results = this.instagramService.getImages();
    this.results.subscribe(res => {
      console.log(res);
    });
  }
}
