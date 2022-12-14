import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ControlRoutingModule } from './control-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DeleteComponent,
    ListComponent, 
  ],
  imports: [
    CommonModule,
    ControlRoutingModule,
    FormsModule
  ]
})
export class ControlModule { }
