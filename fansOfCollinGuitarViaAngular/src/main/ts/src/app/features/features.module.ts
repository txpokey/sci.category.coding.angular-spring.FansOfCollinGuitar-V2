import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeaturesRoutingModule} from './features-routing.module';
import {NewsComponent} from './news/news.component';
import {LayoutModule} from '../layout/layout.module';
import {ServicesModule} from "../services/services.module";
import { PipesCommonModule } from '../pipes/pipes-common/pipes-common.module';
import { EventsComponent } from './lists/events/events.component';
import { LinksComponent } from './lists/links/links.component';
import { TextbooksComponent } from './classroom/textbooks/textbooks.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ServicesModule,
    PipesCommonModule,
    FeaturesRoutingModule
  ],
  declarations: [NewsComponent, EventsComponent, LinksComponent, TextbooksComponent],
  exports: [NewsComponent, FeaturesRoutingModule, EventsComponent, LinksComponent, TextbooksComponent]
})
export class FeaturesModule { }
