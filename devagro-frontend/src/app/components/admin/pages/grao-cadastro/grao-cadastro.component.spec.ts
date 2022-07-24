import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { GraoCadastroComponent } from './grao-cadastro.component';

describe('GraoCadastroComponent', () => {
  let component: GraoCadastroComponent;
  let fixture: ComponentFixture<GraoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ GraoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente criado, Cadastro de Grãos', () => {
    expect(component).toBeTruthy();
  });

  it('Cadastrar grão', () => {
    component.click_cadastrar();
    expect(component.listaGraosArmazenamento.length).toBeGreaterThanOrEqual(1);
  });

  it('Mudar nome do grão', () => {
    const graoAntigo: any = "Milho"
    const grao: any = "Soja";
    const novoGrao = component.mudar_nome(grao)
    expect(novoGrao).not.toEqual(graoAntigo)
  });

  it('Mudar fazenda do grão', () => {
    const fazendaAntiga: any = "Novo Horizonte"
    const fazenda: any = "Raio de Sol";
    const novaFazenda = component.mudar_fazenda(fazenda)
    expect(novaFazenda).not.toEqual(fazendaAntiga)
  });

  it('Mudar colheita do grão', () => {
    const colheitaAntiga: any = "01/01/2022"
    const colheita: any = "24/07/2022";
    const novaColheita = component.mudar_fazenda(colheita)
    expect(novaColheita).not.toEqual(colheitaAntiga)
  });

  it('Mudar informações do grão', () => {
    const infoAntiga: any = "01/01/2022"
    const info: any = "24/07/2022";
    const novaInfo = component.mudar_informacoes(info)
    expect(novaInfo).not.toEqual(infoAntiga)
  });

  it('Listar grão por id', () => {
    const id = 1;
    const grao = component.pegar_grao(id)
    expect(grao).toBeTruthy();
  });

  it('Funcionalidade do botão click', () => {
    expect(component.btnClick).toBeTruthy();
  });
});
