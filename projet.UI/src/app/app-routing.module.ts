import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSecouristeComponent } from './components/secouriste/add-secouriste/add-secouriste.component';
import { EditSecouristeComponent } from './components/secouriste/edit-secouriste/edit-secouriste.component';
import { SecouristeListComponent } from './components/secouriste/secouriste-list/secouriste-list.component';

const routes: Routes = [
  {
    path:'',
    component:SecouristeListComponent
  },
  {
    path:'secouriste',
    component:SecouristeListComponent
  },
  {
    path:'secouriste/add',
    component:AddSecouristeComponent
  },
  {
    path:'secouriste/edit/:id',
    component:EditSecouristeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
