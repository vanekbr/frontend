import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CollapseModule, PaginationModule } from 'ngx-bootstrap';
import { FiltersComponent } from './components/filters/filters.component';
import { ConfirmationDirective } from './directives/confirmation.directive';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { PaginationComponent } from './components/pagination/pagination.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    CollapseModule,
    ToastModule,
    CollapseModule,
    PaginationModule
  ],
  declarations: [
    ConfirmationDirective,
    FiltersComponent,
    PaginationComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    ConfirmationDirective,
    CollapseModule,
    FiltersComponent,
    ToastModule,
    PaginationModule,
    FiltersComponent,
    PaginationComponent
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
