import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-altera-cadastro',
  templateUrl: './funcionario-altera-cadastro.component.html',
  styleUrls: ['./funcionario-altera-cadastro.component.css']
})
export class FuncionarioAlteraCadastroComponent implements OnInit {

  @Input() public titulo: string = 'Funcionários';

  constructor() { }

  funcionarioInfo={
    nome:"",
    fazenda:"",
    funcaoPrincipal:""
  }
  funcionario_info= {
    id: 0,
    nome: "",
    fazenda: "",
    CPF: "",
    telefone: "",
    funcao_princila: "",
    ativo: true
  }

  funcionario_atualizado={
    id: 0,
    nome: "",
    fazenda: "",
    CPF: "",
    telefone: "",
    funcao_princila: "",
    ativo: true

  }


  nome:string=""
  id:number = 0
  fazenda:string= ""
  CPF:string= ""
  telefone:string= ""
  funcaoPrincipal:string= ""
  ativo:boolean=true


  ngOnInit(): void {
    this.constroiLsitaObjeto()
  }

  listLocalStorage:Array<String> = Object(JSON.parse( String(localStorage.getItem("listaFuncionarios"))))
  listaLocalStorageObject :Array<Object> = []
  listaAtualizadaComObjetoStringficado:string=""
  listaString:Array<string>=[]
  valorNome = document.querySelector("#input-nome") as HTMLInputElement
  valorFazenda = document.querySelector("#input-fazenda") as HTMLInputElement
  valorFuncao = document.querySelector("#input-funcaoPrincipal") as HTMLInputElement


  alteraInfo(){
    let valorNome = document.querySelector("#input-nome") as HTMLInputElement
    let valorFazenda = document.querySelector("#input-fazenda") as HTMLInputElement
    let valorFuncao = document.querySelector("#input-funcaoPrincipal") as HTMLInputElement


    this.funcionarioInfo.nome =valorNome.value
    this.funcionarioInfo.fazenda=valorFazenda.value
    this.funcionarioInfo.funcaoPrincipal=valorFuncao.value
    this.encontraFuncionairo(this.funcionarioInfo.nome,this.listaLocalStorageObject,this.funcionarioInfo.fazenda,this.funcionarioInfo.funcaoPrincipal)
    this.encontraEDeleta(this.funcionarioInfo.nome,this.listaLocalStorageObject)
    this.setaNovoObj(this.listaLocalStorageObject)
    this.stringficaLsita(this.listaLocalStorageObject)
    this.setaLocalStorage()
  }

  encontraFuncionairo(nome:string,list:Array<Object>,fazenda:string,funcao:string){
   // list.find(Element.arguments=="nome")
    list.forEach(elemental => {
      //this.constroiLsitaObjeto()
      Object.entries(elemental).forEach(element=>{
        if(element[1]==nome){
          Object.entries(elemental).forEach(element => {

            if(element[0]=="CPF") {
              this.CPF=element[1]
            }
            if(element[0]=="ativo") {
              this.ativo=this.setaAtividade()
            }
            if(element[0]=="telefone") {
              this.telefone=element[1]
            }
            if(element[0]=="id") {
              this.id=element[1]
            }
            if(element[0]=="funcao_princila") {
              this.funcaoPrincipal=this.funcionarioInfo.funcaoPrincipal
            }
            if(element[0]=="nome"){
              this.nome=element[1]
            }
            if(element[0]=="fazenda"){
              this.fazenda=this.funcionarioInfo.fazenda
            }
         });}

      }

    )});

  }

  encontraEDeleta(nome:string,list:Array<Object>){
     list.forEach(elemental => {
       Object.entries(elemental).forEach(element=>{
         if(element[1]==nome){
           list.splice(this.id,1)
          }})});
        }
  setaNovoObj(list:Array<Object>) {
    this.funcionario_atualizado.CPF=this.CPF
    this.funcionario_atualizado.ativo=this.ativo
    this.funcionario_atualizado.fazenda=this.fazenda
    this.funcionario_atualizado.funcao_princila=this.funcaoPrincipal
    this.funcionario_atualizado.id=this.id
    this.funcionario_atualizado.nome=this.nome
    this.funcionario_atualizado.telefone=this.telefone
    list.splice(this.funcionario_atualizado.id,0,this.funcionario_atualizado)
  }

  stringficaLsita(list:Array<Object>){
      list.forEach(element => {
      var elementString = JSON.stringify(element)
      this.listaString.push(elementString)
   });
  }
  setaLocalStorage(){
    localStorage.setItem('listaFuncionarios',JSON.stringify(this.listaString))
  }

  constroiLsitaObjeto(){
    this.listLocalStorage.forEach(element => {
      this.listaLocalStorageObject.push(JSON.parse(String(element)))
     });
  }

  setaAtividade(){
    var check = document.querySelector('#check') as HTMLInputElement
    var checkNo= document.querySelector('#check-no') as HTMLInputElement

    if(checkNo.checked==true){
      this.ativo=false;
      return false
    }if(check.checked==true){return true}else{
      return false
    }
  }
}
