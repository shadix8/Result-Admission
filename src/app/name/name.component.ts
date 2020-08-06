import { Component, OnInit } from '@angular/core';
import { DataService }  from '../data.service'

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  
})
export class NameComponent implements OnInit {

  public allData;
    

  constructor(public DataService:DataService) {
    console.log("Name Component Constructor Called")
   }

  ngOnInit(): void {

           console.log('Home-Result Component OnInit Called')
           this.allData=this.DataService.getAllData();
           
           console.log(this.allData)
           this.DataService.getTotalMarks();
           this.DataService.getStatus();



  }

}
