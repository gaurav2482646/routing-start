import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
isAllow = false;
  constructor(private serversService: ServersService,private aRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.aRoute.snapshot.queryParams)
    console.log(this.aRoute.snapshot.fragment)
    this.aRoute.queryParams.subscribe((queryParam:Params)=>{
      this.isAllow = queryParam['allowEdit']===1 ? true :false;
    });
    this.aRoute.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
