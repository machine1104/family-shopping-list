import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../app/models/Item'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>
  constructor(public db: AngularFirestore) {
    this.itemsCollection = this.db.collection('items', ref => ref.orderBy("name",'asc'));
    this.items = this.itemsCollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getItems(){
    return this.items;
  }

  addItem(item: Item){
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item){
    this.itemDoc = this.db.doc('items/'+item.id);
    this.itemDoc.delete();
  }
}
