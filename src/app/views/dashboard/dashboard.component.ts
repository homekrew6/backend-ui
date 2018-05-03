import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './../../services/customer.service';
import { WorkerService } from './../../services/worker.service';
import { JobService } from '../../services/job.service';
import { PaymentService } from '../../services/payment.service';

declare var jquery: any;
declare var $: any;
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  countDetails = { workersCount: 0, customerCount: 0, jobCount: 0 };
  listDetails = { workers: [], customers: [], jobs: [] };
  dataSource;
  id = 'chart1';
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  IsFilter = false;
  IsFilterCustomer = false;
  finalDayRange = [ ];
  constructor(private workerService: WorkerService, private customerSrvc: CustomerService, private jobSrvc: JobService,
    private paymentSrvc: PaymentService) {

    // this.dataSource = {
    //   "chart": {
    //     "caption": "Total Payment Summary",
    //     "subCaption": "Payment done in each day",
    //     "numberprefix": "$",
    //     "theme": "fint"
    //   },
    //   "data": [
    //     {
    //       "label": "Bakersfield Central",
    //       "value": "880000"
    //     },
    //     {
    //       "label": "Garden Groove harbour",
    //       "value": "730000"
    //     },
    //     {
    //       "label": "Los Angeles Topanga",
    //       "value": "590000"
    //     },
    //     {
    //       "label": "Compton-Rancho Dom",
    //       "value": "520000"
    //     },
    //     {
    //       "label": "Daly City Serramonte",
    //       "value": "330000"
    //     }
    //   ]

    // }
    this.dataSource = {
      "chart": {
        "caption": "Total Payment Summary",
        "subCaption": "Payment done in each day",
        "numberprefix": "$",
        "theme": "fint"
      },
      "data": [
      ]

    }



    const curr = new Date; // get current date
    const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    const last = first + 6; // last day is the first day + 6

    const firstday = new Date(curr.setDate(first));
    const lastday = new Date(curr.setDate(firstday.getDate() + 5));
    let dayRange = [];
    for (let i = 0; i <= 6; i++) {
      if (i == 0) {
        const paymentDate = new Date(firstday);
        const month = paymentDate.getMonth() + 1;
        const month1 = ("0" + month).slice(-2);
        const day = paymentDate.getDate();
        const day1 = ("0" + day).slice(-2);
        dayRange.push({ paymentDate: paymentDate, actualDate: day1 + "/" + month1 + "/" + paymentDate.getFullYear() });
      }
      else if (i == 6) {
        let paymentDate = new Date(lastday);
        paymentDate.setDate(paymentDate.getDate() + 1)
        const month = paymentDate.getMonth() + 1;
        const month1 = ("0" + month).slice(-2);
        const day = paymentDate.getDate();
        const day1 = ("0" + day).slice(-2);
        dayRange.push({ paymentDate: paymentDate, actualDate: day1 + "/" + month1 + "/" + paymentDate.getFullYear() });
      }
      else {
        let index = dayRange.length - 1;
        let paymentDate = new Date(dayRange[index].paymentDate);
        paymentDate.setDate(paymentDate.getDate() + 1)
        const month = paymentDate.getMonth() + 1;
        const month1 = ("0" + month).slice(-2);
        const day = paymentDate.getDate();
        const day1 = ("0" + day).slice(-2);
        dayRange.push({ paymentDate: paymentDate, actualDate: day1 + "/" + month1 + "/" + paymentDate.getFullYear() });
      }
    }
    this.finalDayRange = dayRange;
  }


  filterActiveCustomersCount() {
    if (this.IsFilterCustomer == false) {
      let finalCount = 0;
      this.listDetails.customers.map((item) => {
        if (item.is_active) {
          finalCount++;
        }
      });
      this.countDetails.customerCount = finalCount;
      this.IsFilterCustomer = true;
    }
    else {

      this.countDetails.customerCount = this.listDetails.customers.length;
      this.IsFilterCustomer = false;
    }

    $("#activeCustomerDropdown").toggle();
  }


  filterActiveWorkersCount() {
    if (this.IsFilter == false) {
      let finalCount = 0;
      this.listDetails.workers.map((item) => {
        if (item.is_active) {
          finalCount++;
        }
      });
      this.countDetails.workersCount = finalCount;
      this.IsFilter = true;
    }
    else {

      this.countDetails.workersCount = this.listDetails.workers.length;
      this.IsFilter = false;
    }

    $("#activeWorkerDropdown").toggle();
  }

  
  showWorkerActive() {
    if (localStorage.getItem("role").toLowerCase() == "admin") {
      $("#activeWorkerDropdown").toggle();
    }

  }

  
  showCustomerActive() {
    if (localStorage.getItem("role").toLowerCase() == "admin") {
      $("#activeCustomerDropdown").toggle();
    }

  }
  ngOnInit() {
    this.workerService.getWorker().subscribe((res) => {
      this.listDetails.workers = res;
      this.countDetails.workersCount = res.length;
    });
    this.customerSrvc.getCustomer().subscribe((res) => {
      this.listDetails.customers = res;
      this.countDetails.customerCount = res.length;
    })

    this.jobSrvc.getJobList().subscribe((res) => {
      this.countDetails.jobCount = res.response.message.length;
    })

    this.paymentSrvc.getPayment().subscribe((res) => {

      res.map((item) => {
        const paymentDate = new Date(item.paymentDate);
        const month = paymentDate.getMonth() + 1;
        const month1 = ("0" + month).slice(-2);
        const day = paymentDate.getDate();
        const day1 = ("0" + day).slice(-2);
        item.paymentDay = day1 + "/" + month1 + "/" + paymentDate.getFullYear();
      });

      var Newservices = {};

      
      for (var j = 0; j < this.finalDayRange.length; j++) {
        let price = 0;
        var d2 = this.finalDayRange[j].actualDate;
        for (var k = 0; k < res.length; k++) {
          var d1 = res[k].paymentDay;
          if (d2 == d1 ) {
            price = price + parseInt(res[k].amount);
          }
        }
        this.finalDayRange[j].price = price;
      }
 
      // var services = {};
      // for (var i = 0; i < res.length; i++) {
      //   var paymentDay = res[i].paymentDay;
      //   if (!services[paymentDay]) {
      //     services[paymentDay] = [];
      //   }
      //   services[paymentDay].push(res[i]);
      // }
      // let finalList = [];
      // for (var groupName in services) {
      //   finalList.push({ group: groupName, color: services[groupName] });
      // }
      // let finalServiceList = [];
      // for (let key in finalList) {
      //   let data = { "paymentDate": finalList[key].group, paymentList: [] };
      //   for (let i = 0; i < finalList[key].color.length; i++) {
      //     data.paymentList.push(finalList[key].color[i]);
      //   }
      //   finalServiceList.push(data);
      // }
      // let finalPyamentList = [];
      // for (let key in finalServiceList) {
      //   let data = { label: finalServiceList[key].paymentDate, value: '' };
      //   let totalAmount = 0;
      //   for (let key1 in finalServiceList[key].paymentList) {
      //     totalAmount = totalAmount + Number(finalServiceList[key].paymentList[key1].amount)
      //   }
      //   console.log("totalamount", totalAmount);
      //   let totalAmount1 = totalAmount.toFixed(2);
      //   data.value = totalAmount1;
      //   finalPyamentList.push(data);
      // }
      let newfinalPyamentList = [];
      for (let key in this.finalDayRange ){
        let newData = {
          label: this.finalDayRange[key].actualDate,
          value: this.finalDayRange[key].price,          
        }
        newfinalPyamentList.push(newData);
      }
      this.dataSource.data = newfinalPyamentList;
    })
  }
}
