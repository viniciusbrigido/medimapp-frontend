import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLoginModule } from "@abacritt/angularx-social-login";
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SocialLoginModule
  ],
})
export class LoginModule { }
