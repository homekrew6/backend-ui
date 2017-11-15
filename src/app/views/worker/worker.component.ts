import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { WorkerService } from '../../services/worker.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  workerList=[];
  constructor(private router: Router, private workerService: WorkerService) { }

  ngOnInit() {
    this.getAllWorkers();
  }

  public getAllWorkers(){
    this.workerService.getWorker().subscribe(res=>{      
      this.workerList=res;
    })
  }
  public deleteWorker(id){    
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.workerService.deleteWorker(id).subscribe(res=>{
        this.getAllWorkers();
      },err=>{

      })
    }
  }

}
