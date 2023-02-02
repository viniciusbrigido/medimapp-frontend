import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService, SocialUser
} from '@abacritt/angularx-social-login';
import { UsuarioService } from '../../../../services/usuario.service';
import { Usuario } from '../../../../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private authService: SocialAuthService,
    private usuarioService: UsuarioService
  ) { }

  ngOnDestroy(): void {
    this.signOut();
    this.usuarioService.deslogar();
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.cadastraUsuario(user);
    });
  }

  private cadastraUsuario(user: SocialUser) {
    if (!user) {
      return;
    }
    const usuarioDto: Usuario =  {
      nome: user.name,
      email: user.email,
      admin: false,
      dataCriacao: new Date()
    }

    this.usuarioService.cadastrar(usuarioDto).subscribe((usuarioCadastrado) => {
      sessionStorage.setItem('user', JSON.stringify(usuarioCadastrado));
      this.router.navigate(['home']);
    })
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
