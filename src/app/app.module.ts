import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListBarComponent } from './list-bar/list-bar.component';

// PrimeNG Modules
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';

// import { IconModule } from 'primeng/icon';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ListTableComponent } from './list-table/list-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBarComponent,
    ListItemComponent,
    ListTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    ListboxModule,
    OverlayPanelModule,
    MenubarModule,
    MenuModule,
    TooltipModule,
    PanelModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
