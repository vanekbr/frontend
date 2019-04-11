import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupModel } from '../../core/models/group-model';
import { AdminGroupService } from '../../core/services/admin-group.service';
import { ListComponent } from '../../shared/components/list.component';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'bs-child-group-list',
  templateUrl: 'child-group-list.component.html'
})
export class AdminChildGroupListComponent extends ListComponent<GroupModel> implements OnInit, OnChanges {
  private _innerGroupState: boolean = false;
  protected _parentId: string = 'null';

  @Input()
  public set parentId(value: string) {
    this._parentId = value;
  }

  public get parentId() {
    return this._parentId;
  }

  @Input()
  public set innerGroupState(value: boolean) {
    this._innerGroupState = value;
  }

  public get innerGroupState(): boolean {
    return this._innerGroupState;
  }

  constructor(service: AdminGroupService,
              activatedRoute: ActivatedRoute,
              router: Router,
              notificationService: NotificationService) {
    super(service, activatedRoute, router, notificationService);
  }

  public ngOnInit() {
    this._queryParams.parentId = this._parentId;
    super.ngOnInit();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['parentId']) {
      Object.assign(this._queryParams, { parentId: this._parentId });
    }
  }
}
