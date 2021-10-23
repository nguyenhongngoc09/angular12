import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Article} from "../models/article";
import {map, shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  get articles$() {
    return of<Article[]>([
      {
        title: 'Article 1',
        body: 'has no initializer and is not definitely assigned in the constructor',
        slug: 'slug-1'
      }, {
        title: 'Article 2',
        body: 'Though you can type the URL into the address bar, a navigation UI' +
          ' is straightforward for the user and more common. Replace the default placeholder markup in',
        slug: 'slug-2'
      },
    ]).pipe(shareReplay(1));
  }

  getArticle(slug: string): Observable<Article> {
    // @ts-ignore
    return this.articles$.pipe(map(articles => articles.find(ar => ar.slug === slug)));
  }
}
