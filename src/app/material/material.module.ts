import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



const MaterialComponents = [
  MatButtonModule,
  MatChipsModule,
  MatIconModule,
  MatDialogModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
