import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { VerticalService } from '../../../services/vertical.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  verticalId: any;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute:ActivatedRoute,  private verticalService: VerticalService) { 
    this.rForm = fb.group({      
      'name': [null, Validators.required]   
         
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.verticalId = params['id'];        
      this.getIndividualVertical(this.verticalId);
  });
  }

  public editVertical(faq){   
    
    this.verticalService.editVertical(faq,this.verticalId).subscribe(res=>{      
      this.router.navigate(['/vertical']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualVertical(Id){
    this.verticalService.getIndividualVertical(Id).subscribe(res=>{
      
      this.rForm.controls['name'].setValue(res.name);
                 
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

}
