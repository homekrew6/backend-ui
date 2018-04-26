import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;
  error: string;
  roleId: any;
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
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private roleSrvc: RoleService) {
    this.rForm = fb.group({      
      'is_active': [true]  ,
      'name': [null, Validators.required]   
         
    });

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.roleId = params['id'];        
      this.getIndividualRole(this.roleId);
  });
  }


  goToList() {
    this.router.navigate(['faq']);
  }

  public editRole(role){   
    role.is_active = this.is_active;
    //faq.answer = this.content;
    this.roleSrvc.editRoleTypes(role,this.roleId).subscribe(res=>{      
      this.router.navigate(['/role']);
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public getIndividualRole(Id){
    this.roleSrvc.getIndividualRoleTypes(Id).subscribe(res=>{
      
      this.is_active = res.is_active;
      this.rForm.controls['is_active'].setValue(res.is_active);          
      this.rForm.controls['name'].setValue(res.name);             
      
    },err=>{
      this.error = "Error Occured, please try again"
    })
  }

  public changeIsActive($e: any){
    this.is_active = !this.is_active;
    //console.log(this.is_active);
  }

}
