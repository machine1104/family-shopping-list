import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ItemListComponent } from './item-list/item-list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    AddItemComponent,
    DialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AngularFireStorageModule
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
