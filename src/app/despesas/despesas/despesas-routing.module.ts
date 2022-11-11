import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDespesasComponent } from '../listar-despesas/listar-despesas.component';

const routes: Routes = [
  // {path: 'listar-despesas', component: ListarDespesasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasRoutingModule { }
