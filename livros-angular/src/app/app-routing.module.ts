import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '#', component: AppComponent },
  { path: 'lista', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
