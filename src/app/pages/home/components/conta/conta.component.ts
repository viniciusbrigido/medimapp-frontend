import { Component } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { Usuario } from '../../../../model/usuario';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent {
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private authService: SocialAuthService,
  ) {}

  deslogar() {
    this.usuarioService.deslogar();
  }

  get isLogado() {
    return this.usuarioService.logado;
  }

  loga() {

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
