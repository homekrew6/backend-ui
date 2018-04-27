import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RoleService } from '../../../services/role.service';

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
    placeholderText: 'Answer',
    heightMin:'250px',
    events: {
      'froalaEditor.focus': function (e, editor) {
        console.log(editor.selection.get());
      }
    }
  }
  content: string;
  constructor(private fb: FormBuilder, private router: Router, private srvc: RoleService) {

    this.rForm = fb.group({      
      'is_active': [true],
      'name': [null, Validators.required] 
      
    });
   }

  ngOnInit() {
  }


  goToList() {
    this.router.navigate(['role']);
  }

  public addRole(role){   
    role.is_active = this.is_active;
    //faq.answer = this.content;
    this.srvc.addRoleTypes(role).subscribe(res=>{
      //console.log(res);
      this.router.navigate(['/role']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }
  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
