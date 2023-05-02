import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // an Array...pattern Generics
  articles: Article[];


  constructor() {
    this.articles = [

      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  // Objetos del type HTMLIputElement: title and link
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {

    // Por ello, se acceden por .value: usando backticks string (ES6)
    console.log("Salida Log:", `Adding article title: ${title.value} and link: ${link.value}`);

    // Create a new Article instance with the submitted title and URL
    this.articles.push(new Article(title.value, link.value, 0));

    // Clear the input fields
    title.value = '';
    link.value = '';

    return false;

  }


  sortedArticles(): Article[] {
    // Using arrow (=>) fromES6 and sort() function: (research about soon!)
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }


}
