import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ButtonatorComponent } from './buttonator/buttonator.component';
import { CircleSelectorComponent } from './circle-selector/circle-selector.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { NavigationLineComponent } from './navigation-line/navigation-line.component';
import { NavigationSectionComponent } from './navigation-section/navigation-section.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { TileSelectorComponent } from './tile-selector/tile-selector.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BypassSanitizerPipe } from './bypass-sanitizer.pipe';

@NgModule({
  declarations: [
    IconButtonComponent,
    ButtonatorComponent,
    CircleSelectorComponent,
    InfoBoxComponent,
    ListBoxComponent,
    NavigationLineComponent,
    NavigationSectionComponent,
    RadioButtonComponent,
    TextBoxComponent,
    TileSelectorComponent,
    BypassSanitizerPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    IconButtonComponent,
    ButtonatorComponent,
    CircleSelectorComponent,
    InfoBoxComponent,
    ListBoxComponent,
    NavigationLineComponent,
    NavigationSectionComponent,
    RadioButtonComponent,
    TextBoxComponent,
    TileSelectorComponent,
    BypassSanitizerPipe
  ]
})
export class ComponentsModule { }
