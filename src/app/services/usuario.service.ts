import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './crud.service';
import { Usuario } from '../model/usuario';
import { Observable, take } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends CrudService<Usuario> {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    super(http, '/usuario');
  }

  public consultarPorEmail(email: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/consultar-por-email/${email}`).pipe(take(1));
  }

  deslogar() {
    sessionStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  get usuarioLogado() {
    return sessionStorage.getItem('user');
  }

  get logado(): boolean {
    const logado = !!sessionStorage.getItem('user');
    console.log('logado', logado);
    return logado;
  }
}
