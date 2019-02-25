import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  
  constructor(private itemService: ItemService,public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

  delete(){    
    this.itemService.deleteItem(this.data.item);
    this.dialogRef.close();
  }

}
