import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/intent/add/add.component';
import { ListComponent } from './components/intent/list/list.component';


const routes: Routes = [
  {
    path: 'dashboard', 
    component: MainComponent,
    children: [
      {path: 'add', component: AddComponent},
      {path: 'view', component: ListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
