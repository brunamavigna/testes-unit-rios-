import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDespesasComponent } from './despesas/listar-despesas/listar-despesas.component';

const routes: Routes = [
  {path: 'despesas', component: ListarDespesasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
