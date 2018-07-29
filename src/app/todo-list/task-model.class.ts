
let counter = 0;

export class TaskModel {
  id:number;
  desc:string;
  address:string;
  gender:string;
  orders:string;
  isDone:boolean;
  startDate:Date;
  endDate:Date;
  constructor(desc:string,isDone:boolean = false){
    var now = new Date();
    this.id = counter++;
    this.desc = desc;
    this.isDone = isDone;
    this.startDate =now;
    this.endDate =now;
    this.gender = "male";
  }

  GetDate():string
  {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    return curr_date + "." + curr_month + "." + curr_year;
  }
 

  get expierd()
  { var now = new Date().getTime();
    var timeEndDate = new Date(this.endDate).getTime();
    var isExpierd = timeEndDate < now;
  return isExpierd;}
}
