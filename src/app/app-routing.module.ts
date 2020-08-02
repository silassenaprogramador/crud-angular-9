import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';

const routes: Routes = [
    {path:'meu-componente',component: MeuComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
