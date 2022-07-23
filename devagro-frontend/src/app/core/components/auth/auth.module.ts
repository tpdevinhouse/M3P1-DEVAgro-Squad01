import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Rotas
import { AuthRoutingModule } from './auth-routing.module';

// Páginas
import { SignComponent } from './pages/sign/sign.component';
import { EmpresaCadastroComponent } from './pages/empresa-cadastro/empresa-cadastro.component';

// PrimeNG
import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  declarations: [
    SignComponent,
    EmpresaCadastroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    InputMaskModule,
    FormsModule
  ]
})
export class AuthModule { }
