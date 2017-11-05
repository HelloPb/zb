import { YesNoDialogService } from '../../../shared/services/dialog/yesno/yes-no-dialog.service';
import { Observable } from 'rxjs/Rx';
import { selector } from 'rxjs/operator/publish';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-user-setting-detail',
  templateUrl: './add-edit-user-setting-detail.component.html',
  styleUrls: ['./add-edit-user-setting-detail.component.css']
})
export class AddEditUserSettingDetailComponent implements OnInit {

  private edited = false;

  constructor(private dialogService: YesNoDialogService) { }

  ngOnInit() {
  }

}
