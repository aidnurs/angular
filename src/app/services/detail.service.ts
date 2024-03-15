import {Injectable} from '@angular/core';
import {Todo} from "../todo";
import {Observable} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  todos: Todo[] = [];
  private url: string = 'api/todos';

  // private url: string = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

  getTodo(): Observable<Todo[]> {

    // this.messageService.add('DetailService: fetched todos');
    return this.http.get<Todo[]>(this.url);
  }

  // getArtworks(): void {
  //   this.url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'
  //   this.http.get<any>(this.url).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }
}
