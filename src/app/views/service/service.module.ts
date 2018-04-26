import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceRoutingModule } from './service-routing';
import { ServiceComponent } from './service.component';
import { ServiceService } from '../../services/service.service';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NguiMapModule} from '@ngui/map';
import { EditComponent } from './edit/edit.component';
import { MyFilterPipe } from '../../filters/my-filter.pipe';
import { AlertModule } from 'ngx-bootstrap';
import { TinymceModule } from 'angular2-tinymce';
import { absEnvironment } from '../../../environments/environment';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    ServiceRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    ModalModule.forRoot(),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?libraries=visualization,places,drawing&key=AIzaSyAzwzNzq3irmwjUVU1MhMuwP7qD0CfZijA'}),
    AlertModule.forRoot(),
    TinymceModule.withConfig({
      skin_url: absEnvironment.absuluteUrl,
      entity_encoding : 'xml'

    })

  ],
  declarations: [ServiceComponent, AddComponent, EditComponent, MyFilterPipe],
  providers:[
    ServiceService
  ]
})
export class ServiceModule { }
