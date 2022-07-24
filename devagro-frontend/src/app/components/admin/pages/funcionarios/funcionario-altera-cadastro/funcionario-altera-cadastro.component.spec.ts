import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioAlteraCadastroComponent } from './funcionario-altera-cadastro.component';

describe('FuncionarioAlteraCadastroComponent', () => {
  let component: FuncionarioAlteraCadastroComponent;
  let fixture: ComponentFixture<FuncionarioAlteraCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioAlteraCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioAlteraCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente criado, Alterar Cadastro de Funcionários', () => {
    expect(component).toBeTruthy();
  });

  it('Alterar informações do funcionário', () => {
    expect(component.alteraInfo).toBeTruthy();
  });

  it('Deletar informações do funcionário', () => {
    const nome: string = "Thiago Teodoro Peres"
    const list: Array<Object> = []
    const deletar = component.encontraEDeleta(nome, list)
    expect(deletar).not.toBeNull();
  });

  it('Seta novo objeto de informações do funcionário', () => {
    const list: Array<Object> = ['Dados do funcionário'];
    const novoObj = component.setaNovoObj(list)
    expect(novoObj).not.toBeNull();
  });

  it('Converte a list de funcionários para string', () => {
    const list: Array<Object> = ['Dados do funcionário'];
    const listString = component.stringficaLista(list)
    expect(listString).not.toBeNull();
  });

  it('Seta localStorage', () => {
    expect(component.setaLocalStorage).toBeTruthy();
  });

  it('Lista de Objetos', () => {
    expect(component.constroiLsitaObjeto).toBeTruthy();
  });

  it('Altera a atividade do funcionário', () => {
    expect(component.setaAtividade).toBeTruthy();
  });
});
