import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Article{
  id:number;
  title:string;
  url:string;
  imageUrl:string;
  summary:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchTerm = '';
  articles: Article[] = [];
  term = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getArticles().subscribe( data => {
      this.articles = data;
    });
}

public getArticles(){
  return this.http.get<Article[]>('https://api.spaceflightnewsapi.net/v3/articles');
}
}