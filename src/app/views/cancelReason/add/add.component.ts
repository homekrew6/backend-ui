import { CancelReasonService } from './../../../services/cancelReason.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  
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
  constructor(private fb: FormBuilder, private router: Router, private cancelSrvc: CancelReasonService) {
    this.rForm = fb.group({      
      'name': [null, Validators.required],
      'is_active': ''
      
    });
   }

  ngOnInit() {
  }

  goToList()
  {
    this.router.navigate(['cancelReason']);
  }
  public addCancelReason(data){
    console.log(this.content);
    data.is_active = this.is_active;
    
    
    this.cancelSrvc.addCancelReason(data).subscribe(res=>{
      
      this.router.navigate(['/cancelReason']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
 }

}
