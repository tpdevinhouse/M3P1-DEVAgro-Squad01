import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaCadastroComponent } from './empresa-cadastro.component';

describe('EmpresaCadastroComponent', () => {
  let component: EmpresaCadastroComponent;
  let fixture: ComponentFixture<EmpresaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Testando função de validação de senha', () => {
    const fixture = TestBed.createComponent(EmpresaCadastroComponent);
    const app = fixture.componentInstance;
    expect(app.validarSenha('senha123', 'senha123')).toEqual(null)
  });
});
