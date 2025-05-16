import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ChipModule } from 'primeng/chip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ImageModule } from 'primeng/image';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { InputSwitchModule } from 'primeng/inputswitch';

const material = [
    EditorModule,
    RadioButtonModule,
    ChipModule,
    AutoCompleteModule,
    TableModule,
    CalendarModule,
	SliderModule,
	DialogModule,
	ContextMenuModule,
	DropdownModule,
	ButtonModule,
	ToastModule,
    InputTextModule,
    ProgressBarModule,
    SkeletonModule,
    ButtonModule,
    CalendarModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    MultiSelectModule,
    ProgressBarModule,
    SkeletonModule,
    SliderModule,
    TableModule,
    ToastModule,
    MultiSelectModule,
    CheckboxModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ImageModule,
    InputTextareaModule,
    InputSwitchModule
]
@NgModule({
   imports: [material],
   exports: [material]
})

export class PrimeNgModule { }
