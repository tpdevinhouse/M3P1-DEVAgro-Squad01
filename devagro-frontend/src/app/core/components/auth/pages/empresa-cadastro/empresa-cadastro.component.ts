import { Component } from '@angular/core';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.css']
})
export class EmpresaCadastroComponent {

  constructor() { }

  public validarSenha(value1: string, value2: string) {
    if(value1 != value2) {
      return window.alert('Senhas não correspondem')
    } else {
      return null
    }

  }
}
