import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-materials',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialsComponent implements OnInit {
  materialsList = [];
  settings = {
    columns: {
      name: {
        title: 'Name',
      },
      price: {
        title: 'Price',
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: 'edit',
          title: '<i class="fa fa-pencil"></i>',
        },
        {
          name: 'delete',
          title: '<i class="fa fa-trash" ></i>',
        }
      ],
    },
    attr: {
      class: 'table table-bordered'
    },


  };

  constructor(private router: Router, private srvc: MaterialService) { }

  ngOnInit() {
    this.getAllMaterials();
  }

  onCustom(event) {

    if (event.action == "delete") {
      this.deleteMaterial(event.data.id);
    }

    else if (event.action == "edit") {
      //this.router.navigate(['/worker/edit', { id: "SomeValue" }]);
      this.router.navigateByUrl('/materials/edit/' + event.data.id)
    }

  }

  public getAllMaterials() {
    this.srvc.getMaterial().subscribe(res => {
      //console.log(res);
      const filteredItems = res.sort(function (a, b) {
        return b.id - a.id;
      });
      this.materialsList = filteredItems;
    })
  }
  public deleteMaterial(id) {
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if (confirmMessage) {
      this.srvc.deleteMaterial(id).subscribe(res => {
        this.getAllMaterials();
      }, err => {

      })
    }
  }

}
