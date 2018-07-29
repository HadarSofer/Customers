import {TaskModel} from './task-model.class';
import {Injectable} from '@angular/core';
//import {LoggerService} from '../logger.service';

@Injectable()
export class TodoListService {

  tasks:TaskModel[] = [];
  tempTasks:TaskModel[] = [];

  constructor(){}//private logger: LoggerService){}
  addCustomer(costumer:any){
    let t = new TaskModel(costumer.name);
    t.gender = costumer.gender;
    t.address = costumer.email;
    //if(!startDate)
    this.tasks.push(t);
  }

  searchCustomer(name:string): TaskModel[]
  {
    if(name && name.length > 0)
    {
    var result = this.tasks.filter(t =>t.desc === name)
    return result
    }
    else
    return this.tasks;

  }
  addTask(desc:string,startDate:Date,endDate:Date){
    let t = new TaskModel(desc);
    //if(!startDate)
    t.startDate = startDate;
    //if(!endDate)
    t.endDate = endDate;
    this.tasks.push(t);
  }
  removeTask(task:TaskModel){
    var index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  setIsDone(arg:any ,task:TaskModel){
    //debugger;
    task.isDone = arg.target.checked
  }

  get totalIsDone(){
    return this.tasks.filter(t=>t.isDone).length;
  }
  expiredTasks() : TaskModel[]
  {
    //var time = new Date().getTime();
   //var now = new Date().getTime();
  var result = this.tasks.filter(d => d.expierd);
  // {var time = new Date(d.endDate.toString()).getTime();
    //  return (now < time)});

      // this.tempTasks.push(new TaskModel('aaaa',true));
      // return this.tempTasks;  

return result;
      //                         let now = new Date();
    //var leng =  this.tasks.filter(t=>t.endDate < now).length;
    //let t = this.tasks.filter(t=>{
     // new Date(t.endDate) < now
   // });
   // return t;

  }


}
