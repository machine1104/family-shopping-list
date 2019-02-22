import { Component, OnInit } from '@angular/core';
import { ItemService} from '../item.service';
import { Item } from '../models/Item';
@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    name: "",
    amount: 1,
    priority: 1
  }
  constructor(private itemService:ItemService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.item.name != ""){
      this.itemService.addItem(this.item);
      this.item.name = "";
      this.item.amount = 1;
      this.item.priority = 1;

    }
  }

}
