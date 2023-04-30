import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];


  constructor(){
    this.articles = [

      new Article('Angular', 'http://angular.io', 3),
new Article('Fullstack', 'http://fullstack.io', 2),
new Article('Angular Homepage', 'http://angular.io', 1),




    ]
  }



    // Objetos del type HTMLIputElement: title and link
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{

      // Por ello, se acceden por .value: usando backticks string (ES6)
    console.log("Salida Log:",`Adding article title: ${title.value} and link: ${link.value}`);

    // This is for proof:
    alert("Hola Mundo, this is Javascript!");

    return false;




  }

}
