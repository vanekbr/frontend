import { Component } from '@angular/core';
import { ListComponent } from '../../shared/components/list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailTemplateModel } from '../../core/models/email-template-model';
import { AdminEmailTemplateService } from '../../core/services/admin-email-template.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'bs-template-list',
  templateUrl: 'email-template-list.component.html'
})
export class AdminEmailTemplateListComponent extends ListComponent<EmailTemplateModel> {
  constructor(service: AdminEmailTemplateService,
              activatedRoute: ActivatedRoute,
              router: Router,
              notificationService: NotificationService) {
    super(service, activatedRoute, router, notificationService);
  }
}
