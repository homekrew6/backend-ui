import { debug } from 'util';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CancelReasonService } from './../../../services/cancelReason.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  cancelId: any;
  is_active = true;
  public editorOptions: Object = {
    placeholderText: 'Content',
    heightMin:'250px',
    events: {
      'froalaEditor.focus': function (e, editor) {
        console.log(editor.selection.get());
      }
    }
  }
  content: string;
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private service: CancelReasonService) {
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'is_active': ''
    });
   }
  goToList() {
    this.router.navigate(['cancelReason']);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.cancelId = params['id'];        
      this.getIndividualCancel(this.cancelId);
    });
  }

  public editCancel(data){   
    data.is_active = this.is_active;
    this.service.editCancelReason(data,this.cancelId).subscribe(res=>{      
      this.router.navigate(['/cancelReason']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualCancel(Id){
    this.service.getIndividualCancelReason(Id).subscribe(res=>{
      
      this.rForm.controls['name'].setValue(res.name); 
      this.is_active = res.is_active;
      this.rForm.controls['is_active'].setValue(res.is_active);      
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }
 
  

}
