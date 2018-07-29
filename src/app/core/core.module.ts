import {ModuleWithProviders, NgModule} from "@angular/core";
import {AaaService, ConfigService} from "./src/services/aaa.service";
import { UploadComponent } from './src/components/upload.component';

@NgModule({
    declarations:[
      UploadComponent
    ],
    providers   :[
      ConfigService
    ],
    bootstrap   :[],
    imports     :[

    ],
    exports     :[UploadComponent]
})
export class CoreModule{
  static forRoot( config : ConfigService   ) : ModuleWithProviders{
    return {
      ngModule : CoreModule,
      providers   :[
        AaaService,
        //{ provide : AaaService , useClass : AaaService},
        { provide : ConfigService , useValue: config },

      ]
    }
  }
}
