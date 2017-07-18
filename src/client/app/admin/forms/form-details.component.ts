import { Component } from '@angular/core';
import { DetailsComponent } from '../../shared/components/details.component';
import { FormElementType, FormModel } from '../../core/models/form-model';
import { FormService } from '../../core/services/form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';
import { BreadcrumbService } from '../../core/services/breadcrumb.service';

@Component({
  moduleId: module.id,
  selector: 'bs-form-details',
  templateUrl: 'form-details.component.html'
})
export class FormDetailsComponent extends DetailsComponent<FormModel> {

  public get FormElementType() {
    return FormElementType;
  }

  constructor(service: FormService,
              route: ActivatedRoute,
              router: Router,
              breadcrumbService: BreadcrumbService,
              notificationService: NotificationService) {
    super(service, route, router, breadcrumbService, notificationService);

    this._returnPath = '/admin/forms';
  }

  public clone(model: FormModel) {
    (<FormService>this._service).clone(model).subscribe(model => {
      this._router.navigate([this._returnPath, model.id, 'edit']);
      this._notificationService.success('T_SUCCESS_CLONED');
    });
  }
}
