import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'control/create', component: CreateComponent },
  { path: 'control/edit/:id', component: EditComponent },
  { path: 'control/delete/:id', component: DeleteComponent },
  { path: 'control/list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlRoutingModule {}
