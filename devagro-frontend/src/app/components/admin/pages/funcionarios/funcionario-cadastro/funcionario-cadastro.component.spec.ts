import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioCadastroComponent } from './funcionario-cadastro.component';

describe('FuncionarioCadastroComponent', () => {
  let component: FuncionarioCadastroComponent;
  let fixture: ComponentFixture<FuncionarioCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente criado, Cadastro de Funcionários', () => {
    expect(component).toBeTruthy();
  });

  it('Cadastrar funcionário', () => {
    component.apertar_cadastrar();
    expect(component.listaFuncionariosArmazenamento.length).toBeGreaterThanOrEqual(1);
  });

  it('Listar funcionário por id', () => {
    const id = 1;
    const funcionario = component.pegar_funcionario(id)
    expect(funcionario).toBeTruthy();
  });

  it('Mudar nome do funcionário', () => {
    const nomeAntigo: any = "Thiago Peres"
    const nome: any = "Thiago Teodoro Peres";
    const novoNome = component.mudar_nome(nome)
    expect(novoNome).not.toEqual(nomeAntigo)
  });

  it('Mudar fazenda do funcionário', () => {
    const fazendaAntiga: any = "Novo Horizonte"
    const fazenda: any = "Raio de Sol";
    const novaFazenda = component.mudar_fazenda(fazenda)
    expect(novaFazenda).not.toEqual(fazendaAntiga)
  });

  it('Mudar CPF do funcionário', () => {
    const cpfAntigo: any = "123.123.123-12"
    const cpf: any = "222.222.222-22";
    const novoCpf = component.mudar_CPF(cpf)
    expect(novoCpf).not.toEqual(cpfAntigo)
  });

  it('Mudar telefone do funcionário', () => {
    const telefoneAntigo: any = "(11) 91122-3344"
    const telefone: any = "(22) 92233-9977";
    const novoTelefone = component.mudar_telefone(telefone)
    expect(novoTelefone).not.toEqual(telefoneAntigo)
  });

  it('Mudar status do funcionário', () => {
    const statusAntigo: any = false
    const status: boolean = true
    const novoStatus = component.mudar_ativo(status)
    expect(novoStatus).not.toEqual(statusAntigo)
  });
});
