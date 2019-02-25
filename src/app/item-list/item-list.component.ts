import { Component, OnInit, Inject } from '@angular/core';
import { ItemService } from '../item.service'
import { Item } from '../models/Item'
import {MatDialog} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService,
    public dialog: MatDialog) {
    
  }

  ngOnInit() {
    this.itemService.getItems().subscribe(items =>{
      //console.log(items);
      this.items=items;
    });
  }

  deleteItem(item){
    
    this.itemService.deleteItem(item);
  }

  openDialog(item): void {
    this.dialog.open(DialogComponent,{
      data: {
      item: item}
    });
  }

}


