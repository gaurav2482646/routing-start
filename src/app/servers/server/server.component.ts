import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
id:number = null;
  constructor(private serversService: ServersService,private route:ActivatedRoute, private mRouter:Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']
    console.log(this.id+" is the ID ")
    this.server = this.serversService.getServer(+this.id);

    this.route.params.subscribe((params:Params)=>{
      this.id =  params['id']
        this.server = this.serversService.getServer(+this.id);

      }
    )
  }

  onEdit() {
    this.mRouter.navigate(['edit'],{relativeTo:this.route})
  }
}
