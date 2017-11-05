import { YesNoDialogService } from '../../shared/services/dialog/yesno/yes-no-dialog.service';
import { Observable } from 'rxjs/Rx';
import { CanComponentDeactivate } from '../../shared/services/auth/can-deactivate-guard/can-deactivate-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit, CanComponentDeactivate {

  private edited = false;

  constructor(private dialogService: YesNoDialogService) { }

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.edited) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }
}
