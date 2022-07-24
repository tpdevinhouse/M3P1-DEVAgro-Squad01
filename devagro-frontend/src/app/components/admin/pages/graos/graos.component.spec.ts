import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { GraosComponent } from './graos.component';

describe('GraosComponent', () => {
  let component: GraosComponent;
  let fixture: ComponentFixture<GraosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ GraosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente criado', () => {
    expect(component).toBeTruthy();
  });

  it('Selecionar grão', () => {
    const grao: any = {
      selectedGrao: 'Grao',
      mostrar: true
    }
    expect(component.onSelect(grao)).not.toBeNull();
  });

  it('Armazenamento do grão', () => {
    expect(component.storeGrao).toBeTruthy();
  });

  it('Deletar grão específico', () => {
    const grao: any = {
      selectedGrao: 'Grao',
      mostrar: true
    }
    expect(component.SpecificDelete(grao)).not.toBeNull();
  });

  it('Deletar grão', () => {
    expect(component.deleteGraos).not.toBeNull();
  });

  it('Refresh page', () => {
    expect(component.refreshPage).toBeTruthy();
  });

  it('Btn click', () => {
    expect(component.btnClick).toBeTruthy();
  });
});
