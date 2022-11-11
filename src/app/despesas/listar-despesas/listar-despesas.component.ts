import { Component, OnInit } from '@angular/core';
import { despesas } from './despesas';
import { FormGroup, FormControl} from '@angular/forms';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-listar-despesas',
  templateUrl: './listar-despesas.component.html',
  styleUrls: ['./listar-despesas.component.scss']
})
export class ListarDespesasComponent implements OnInit {

  
  despesas: any = []
  formulario: any 
  

  constructor() { }

  ngOnInit(): void {
    this.despesas = [];
    this.formulario = new FormGroup({
      despesaId: new FormControl(),
      nome: new FormControl(),
      valor: new FormControl()
    });
  }

  

  listarDespesa(){
    this.formulario.value.despesaId = Guid.create().toString();
    this.formulario.value.valor = false; 
    const despesa : despesas = this. formulario.value;
    this.despesas.push(despesa);
    localStorage.setItem('BD', JSON.stringify(this.despesas));
    this.formulario.reset();
    
  }

  // exibirDespesas(){
  //   if(localStorage.getItem('BD')){
  //     this.despesas = JSON.parse(localStorage.getItem('BD'))
  //   }
  //   else{
  //     this.despesas = [];
  //   }
  // }
  
  

}
