import { Component, Input, OnInit, TRANSLATIONS } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {

  qtdeFazendas = Number(localStorage.getItem('quantidade_fazendas'));
  aprovaCadastro: boolean = this.qtdeFazendas > 0 ? true : false

  @Input() public titulo: string = 'Funcionários';

  nome: string = '';
  id: Number = 0;
  fazenda: string = '';
  CPF: string = '';
  telefone: string = '';
  funcao_principila: string = '';
  ativo: string = "";

  constructor() {}

  localStorageView: Array<Object> = Object(
    JSON.parse(String(localStorage.getItem('listaFuncionarios')))
  );
  localStorageViewObject: Array<Object> = [];
  listaObj: Array<object> = [];
  listNome: Array<any> = [];
  listFazenda: Array<any> = [];
  listFuncao: Array<any> = [];
  listAtivo: Array<any> = [];

  ngOnInit(): void {
    if (Object.keys(this.localStorageView).length != 0) {
      this.localStorageView.forEach((element) => {
        this.localStorageViewObject.push(JSON.parse(String(element)));
      });
      this.localStorageViewObject.forEach((elemental) => {
        Object.entries(elemental).forEach((element) => {});
      });

      this.localStorageViewObject.forEach((elemental) => {
        Object.entries(elemental).forEach((element) => {});
      });
      this.addFuncionarios();
      this.pegaFazenda();
      this.pegaFuncao();
      this.pegaAtividade();
    }
  }

  pegaNome():any{
    this.localStorageViewObject.forEach(elemental => {
      Object.entries(elemental).forEach(element=>{
        if(element[0]=="nome"){
          this.nome=element[1]
          this.listNome.push(this.nome)
          return element[1].toString
        }

      })

    });
    }
    pegaFazenda(){
      this.localStorageViewObject.forEach(elemental => {
        Object.entries(elemental).forEach(element=>{
          if(element[0]=="fazenda"){
            this.fazenda=element[1]
            this.listFazenda.push(this.fazenda)
            return element[1].toString
          }

        })

      });

    }

    pegaFuncao(){
      this.localStorageViewObject.forEach(elemental => {
        Object.entries(elemental).forEach(element=>{
          if(element[0]=="funcao_princila"){
            this.funcao_principila=element[1]
            this.listFuncao.push(this.funcao_principila)
            return element[1].toString
          }

        })

      });

    }

  pegaTelefone(){}
  pegaFUncaoPrincipal(){}
  pegaAtividade(){
    this.localStorageViewObject.forEach(elemental => {
      Object.entries(elemental).forEach(element=>{
        if(element[0]=="ativo"){
          this.ativo=element[1]

          if(this.ativo==""){this.ativo="não"}else{
            this.ativo="sim"
          }
          this.listAtivo.push(this.ativo)
          return element[1].toString
        }

      })


    });
  }

  addFuncionarios(){

   //CRIA UM ELEMENTO TR E ATRIBUI UMA CLASSE A ELE
    const tr = document.createElement('tr')
    tr.classList.add('tr');

    ///BUSCA O ELEMENTO TABLE VIA DOM
    //DEFINE O ELEMENTO TR CRAIDO ANTERIORMENTE COMO ELEMENTO FILHO DE TABLE
    const table = document.querySelector("table")
    table?.appendChild(tr)

    ///CRIAÇÃO DOS ELEMENTOS TD E CONFIGURAÇÃO DOS NOMES DAS CLASSES
    const td2 = document.createElement("td")
    td2.classList.add('td2');
    const td1 = document.createElement("td")
    td1.classList.add('td1');

    const td3 = document.createElement("td")
    td3.classList.add('td3');
    const td4 = document.createElement("td")
    td4.classList.add('td4');
    const td5 = document.createElement("td")
    td5.classList.add('td5');



    //////ASSOCIA TODAS AS "TD" COMO FILHAS DE "TR"

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)

    //MANIPULA ELEMENTOS DENTRO DE "TD1" (INSERE 2 DIVS)
    const divImg = document.createElement("div")
    td1.appendChild(divImg);
            //Adiciona tag <img> dentro de "divImg"
            const img = document.createElement("img")
            divImg.appendChild(img);

    //ADICIONA DIV QUE CONTERÁ NOME E EMAIL
    const divParagrafo = document.createElement("div")
    td1.appendChild(divParagrafo);
          //ADICIONA OS PARAGRAFOS QUE CONTERAM NOME E EMAIL NA "DIVpARAGRAFO"
          const p1 = document.createElement("p")
          const p2 = document.createElement("p")
         divParagrafo.appendChild(p1)
         this.pegaNome()
         p1.classList.add("id:")
         divParagrafo.appendChild(p2)
  }

  constroiLsitaDeObj(){
    this.localStorageView.forEach(element => {
      this.localStorageViewObject.push(JSON.parse(String(element)))
     });
  }

}
