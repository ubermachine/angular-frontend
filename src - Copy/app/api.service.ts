import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  
  public getPosts(){
  return this.httpClient.get(`http://167.71.230.118/blog/api/snippets.json`);
  }

  
}
