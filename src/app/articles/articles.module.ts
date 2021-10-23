import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from "./components/article-detail/article-detail.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: ':slug',
    component: ArticleDetailComponent
  },
];

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ArticlesModule { }
