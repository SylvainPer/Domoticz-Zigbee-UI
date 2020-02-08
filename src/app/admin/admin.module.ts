import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '@app/shared';
import { PermitToJoinComponent } from './permit-to-join/permit-to-join.component';
import { SwResetComponent } from './sw-reset/sw-reset.component';
import { ErasePdmComponent } from './erase-pdm/erase-pdm.component';
import { ReloadPluginComponent } from './reload-plugin/reload-plugin.component';
import { RescanGroupComponent } from './rescan-group/rescan-group.component';
import { AssistProvisionningComponent } from './assist-provisionning/assist-provisionning.component';

@NgModule({
  imports: [AdminRoutingModule, SharedModule],
  declarations: [
    AdminComponent,
    PermitToJoinComponent,
    SwResetComponent,
    ErasePdmComponent,
    ReloadPluginComponent,
    RescanGroupComponent,
    AssistProvisionningComponent
  ]
})
export class AdminModule {}
