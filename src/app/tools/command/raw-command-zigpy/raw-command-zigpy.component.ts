import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logger } from '@app/core';
import { ApiService } from '@app/services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { DeviceByName } from '@app/shared/models/device-by-name';
import { Observable } from 'rxjs';

const log = new Logger('RawCommandZigpyComponent');

@Component({
  selector: 'app-raw-command-zigpy',
  templateUrl: './raw-command-zigpy.component.html',
  styleUrls: ['./raw-command-zigpy.component.scss']
})



export class RawCommandZigpyComponent implements OnInit {
  devices$: Observable<DeviceByName[]>;
  form: FormGroup;

  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private translate: TranslateService
  ) { }

  selectedCar: string;

  TrueFalse = [
    { id: 'False', name: 'False' },
    { id: 'True', name: 'True' }
  ];
  GroupAddressFlag = 'False';
  AckMode = 'False';

  ngOnInit() {
    this.form = this.formBuilder.group({

      ProfileId: ["0104"],
      ClusterId: ["0000"],
      TargetAddr: [null],
      TargetEp: ["01"],
      SourceEp: ["01"],
      Sqn: ["55"],
      Payload: [null],
      deviceSelected: [null],

    });
    this.devices$ = this.apiService.getZDeviceName();
  }

  putCommand() {
    const values = {
      TargetAddr: this.form.get('deviceSelected').value._NwkId,
      GroupAddressFlag: this.GroupAddressFlag,
      AckMode: this.AckMode,
      ProfileId: this.form.get('ProfileId').value,
      ClusterId: this.form.get('ClusterId').value,
      TargetEp: this.form.get('TargetEp').value,
      SourceEp: this.form.get('SourceEp').value,
      Sqn: this.form.get('Sqn').value,
      Payload: this.form.get('Payload').value
    };

    this.apiService.putCommandRawZigpy(values).subscribe(() => {
      this.toastr.success(this.translate.instant('api.global.succes.commandsent.notify'));
    });
  }


}
