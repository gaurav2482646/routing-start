import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private mrouter: Router) { }

  ngOnInit() {
  }
  openServerPage(id:number) {
    this.mrouter.navigate(['/server',id,'edit'],{queryParams:{isGod:'1'},fragment:'LOADING'});
  }
}
