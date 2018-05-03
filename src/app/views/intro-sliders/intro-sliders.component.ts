import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SliderService } from '../../services/slider.service';

@Component({
  selector: 'app-intro-sliders',
  templateUrl: './intro-sliders.component.html',
  styleUrls: ['./intro-sliders.component.css']
})
export class IntroSlidersComponent implements OnInit {
  sliderList= [];
  constructor(private router: Router, private sliderService: SliderService) { }

  ngOnInit() {
    this.getAllSlider();
  }

  public getAllSlider(){
    this.sliderService.getSlider().subscribe(res=>{
      //console.log(res);
      const filteredItems = res.sort(function (a, b) {
        return b.id - a.id;
      });
      this.sliderList = filteredItems;
    })
  }
  public deleteSlider(id){
    //console.log(id);
    let confirmMessage = confirm('Do you want to delete?')
    if(confirmMessage){      
      this.sliderService.deleteSlider(id).subscribe(res=>{
        this.getAllSlider();
      },err=>{

      })
    }
  }

}
