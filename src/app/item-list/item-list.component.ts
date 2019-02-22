import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service'
import { Item } from '../models/Item'
@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService) {
    
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

}
