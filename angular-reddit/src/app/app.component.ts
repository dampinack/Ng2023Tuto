import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    // Objetos del type HTMLIputElement: title and link
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    
      // Por ello, se acceden por .value: usando backticks string (ES6)
    console.log("Salida Log:",`Adding article title: ${title.value} and link: ${link.value}`);
    
    return false;
  }
   
}
