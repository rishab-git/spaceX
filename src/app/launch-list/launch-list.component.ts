import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {
  launches = <any>[];
  filterString = '';
  selectedYear = 0;
  successfulLaunchFilter= '';
  successfulLandingFilter = '';
  filters = [
    {
      header: "Launch Year",
      options: [
        {
          label: 2006
        },
        {
          label: 2007
        },
        {
          label: 2008
        },
        {
          label: 2009
        },
        {
          label: 2010
        },
        {
          label: 2011
        },
        {
          label: 2012
        },
        {
          label: 2013
        },
        {
          label: 2014
        },
        {
          label: 2015
        },
        {
          label: 2016
        },
        {
          label: 2017
        },
        {
          label: 2018
        },
        {
          label: 2019
        },
        {
          label: 2020
        }
      ]
    },
    {
      header: 'Successful Launch',
      options: [{
        label: 'True'
      },
      {
        label: 'False'
      }]
    },
    {
      header: 'Successful Landing',
      options: [{
        label: 'True'
      },
      {
        label: 'False'
      }]
    }
  ]

  constructor(private backend: BackendService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          if(params['filter']) {
            this.getFilteredLaunches(params['filter']);
          } else {
            this.getAllLaunches();
          }
      });
  }

  getAllLaunches() {
    this.backend.getAll()
    .subscribe(data => {
      this.launches = data;
    });
  }

  getFilteredLaunches(queryString) {
    this.backend.getFiltered(queryString)
    .subscribe(data => {
      this.launches = data;
    });
  }

  replaceAt(input, index, replacement, category) {
    if(replacement !== 'true') {
      return input.substr(0, index) + category + replacement + input.substr( index + (category + replacement).length);
    } else {
      return input.substr(0, index) + category + replacement + input.substr( index + 1 + (category + replacement ).length);
    }
  }

  selectFilter(category, option) {
    switch(category) {
      case 'Launch Year': {
        if(this.selectedYear && this.selectedYear === option) {
          this.selectedYear = 0;
          this.filterString = this.filterString.replace('&launch_year=' + option, '');
        } else {
        this.selectedYear = option;
        if(this.filterString.indexOf('&launch_year=') > -1) {
          this.filterString = this.replaceAt(this.filterString, this.filterString.indexOf('&launch_year='), option, '&launch_year=');
        } else {
          this.filterString += '&launch_year=' + option;
        }
      }
        console.log(this.filterString);
      }
        break;
      case 'Successful Launch': {
        if(this.successfulLaunchFilter && this.successfulLaunchFilter === option) {
          this.successfulLaunchFilter = '';
          this.filterString = this.filterString.replace('&launch_success=' + option.toLowerCase(), '');
        } else {
        this.successfulLaunchFilter = option;
        if(this.filterString.indexOf('&launch_success=') > -1) {
          this.filterString = this.replaceAt(this.filterString, this.filterString.indexOf('&launch_success='), option.toLowerCase(), '&launch_success=')
        } else {
          this.filterString += '&launch_success=' + option.toLowerCase();
        }
      }
        console.log(this.filterString);
      }
        break;
      case 'Successful Landing':{
        if(this.successfulLandingFilter && this.successfulLandingFilter === option) {
          this.successfulLandingFilter = '';
          this.filterString = this.filterString.replace('&land_success=' + option.toLowerCase(), '');
        } else {
        this.successfulLandingFilter = option;
        if(this.filterString.indexOf('&land_success=') > -1) {
          this.filterString = this.replaceAt(this.filterString, this.filterString.indexOf('&land_success='), option.toLowerCase(), '&land_success=')
        } else {
          this.filterString += '&land_success=' + option.toLowerCase();
        }
      }
        console.log(this.filterString);
      }
        break;
    }
    this.router.navigate(['/launchList'], { queryParams: { filter: this.filterString } });
  }

}
