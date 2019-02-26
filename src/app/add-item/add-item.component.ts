import { Component, OnInit } from '@angular/core';
import { ItemService} from '../item.service';
import { Item } from '../models/Item';
@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  priorities = [
    {value: 1, viewValue: 'Low'},
    {value: 2, viewValue: 'Medium'},
    {value: 3, viewValue: 'High'}]

  item: Item = {
    name: "",
    amount: 1,
    priority: this.priorities[0].value
  }

  


  constructor(private itemService:ItemService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.item.name != "" && this.item.amount != 0){
      this.itemService.addItem(this.item);
      this.item.name = "";
      this.item.amount = 1;
      this.item.priority = 1;

    }
  }

}
