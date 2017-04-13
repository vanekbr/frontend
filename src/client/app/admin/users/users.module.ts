import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserDetailsComponent } from './user-details.component';
import { UserFormComponent } from './user-form.component';
import { UserListComponent } from './user-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersFilterComponent } from '../../user/users-filter/users-filter.component';

@NgModule({
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent,
    UsersFilterComponent
  ],
  exports: [
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent,
    UsersFilterComponent
  ]
})
export class UsersModule {
}

