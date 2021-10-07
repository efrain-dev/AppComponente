import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { TagsRoutingModule } from './tags-routing.module'
import { TagsComponent } from './tags.component'

@NgModule({
  imports: [NativeScriptCommonModule, TagsRoutingModule],
  declarations: [TagsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TagsModule {}
