import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Article} from "../../models/article";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(private readonly articleService: ArticleService) {
    this.articles$ = of([]);
  }

  ngOnInit(): void {
    this.articles$ = this.articleService.articles$;
  }
}
