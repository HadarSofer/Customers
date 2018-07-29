import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AaacComponent } from './src/aaac.component';

@NgModule({
    declarations:[
      AaacComponent
    ],
    providers   :[],
    bootstrap   :[],
    imports     :[
        CommonModule
    ],
    exports     :[
      AaacComponent
    ]
})
export class UiSharedModule{}
