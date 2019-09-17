import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  articles;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getPosts().subscribe((data)=>{
      console.log(data);
      this.articles = data['results'];
    });
  }
}