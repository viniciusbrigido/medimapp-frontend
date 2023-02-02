import { Component, OnInit } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService, SocialUser
} from '@abacritt/angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../../services/usuario.service';
import { Usuario } from '../../../../model/usuario';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: SocialAuthService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.authService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log('this.socialUser', this.socialUser);
      if (user) {
        this.cadastraUsuario(user);
      }
    });
  }

  private cadastraUsuario(user: SocialUser) {
    const usuarioDto: Usuario =  {
      nome: user.name,
      email: user.email,
      admin: false,
      dataCriacao: new Date()
    }

    this.usuarioService.cadastrar(usuarioDto).subscribe((usuarioCadastrado) => {
      console.log('usuarioCadastrado', usuarioCadastrado);
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
