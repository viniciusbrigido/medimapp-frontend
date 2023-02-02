import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<T> {

  constructor(
    private httpClient: HttpClient,
    protected apiUrl: string
  ) {}

  get url() {
    return 'http://localhost:8080' + this.apiUrl;
  }

  public cadastrar(resource: T): Observable<T> {
    return this.httpClient.post<T>(`${this.url}/cadastrar`, resource).pipe(take(1));
  }

  public alterar(id: number, resource: T): Observable<T> {
    return this.httpClient.put<T>(`${this.url}/alterar/${id}`, resource).pipe(take(1));
  }

  public excluir(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/excluir/${id}`);
  }

  public listar(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.url}/listar`).pipe(take(1));
  }

  public consultar(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.url}/consultar/${id}`).pipe(take(1));
  }
}
