import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public allData = [
    {
      "name":"abhishek",
      "marks":{
          "Maths":43,
          "English":30,
          "Science":37
      },
      "rollNumber":"KV2017-5A1",
      "totalMarks":0,
      "status":"pass"
  },
  {
    "name":"rajiv",
    "marks":{
        "Maths":18,
        "English":21,
        "Science":45
    },
    "rollNumber":"KV2017-5A2",
   "totalMarks":0,
   "status":"pass"
    
},
  {
      "name":"zoya",
      "marks":{
          "Maths":42,
          "English":31,
          "Science":50
      },
      "rollNumber":"KV2017-5A3",
      "totalMarks":0,
      "status":"pass"
  }


    



  ]
  public max;
  


  constructor() {
    console.log("Service constructor called")
   }
   public getAllData():any {

    return this.allData;


   }
   public getTotalMarks():any{
     for(let data of this.allData){
           data.totalMarks=data.marks.English+data.marks.Maths+data.marks.Science

     }
   }

   public getStatus():any{
       
             for(let data of this.allData)
             {    
                 if(data.marks.English>=20&&data.marks.Maths>=20&&data.marks.Science>=20)
                 {
                      data.status="pass";
                      if(data.totalMarks==123)
                      {
                        data.status="Topper"
                      }
                      
                 }
                 else
                 {
                   data.status="fail"
                 }
                 
                 
                 
             }
             

   }
}
