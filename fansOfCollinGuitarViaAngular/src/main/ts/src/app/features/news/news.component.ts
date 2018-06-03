import { Component, OnInit } from '@angular/core';
import {TabStateComponent} from "../../services/tab-state/tab-state.component";
import {IGuitarNewsConfig} from "./GuitarNewsConfig";
import {FileAsSourceForJsonService} from "../../services/file-as-source-for-json.service";
import {IncludeTemplateComponent} from "../../services/include-template/include-template.component";

@Component({
  selector: 'guitar-news',
  templateUrl: './news.component.html',
  providers: [FileAsSourceForJsonService,TabStateComponent, IncludeTemplateComponent],
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public guitarProgramNews: IGuitarNewsConfig;

  constructor(public tabStates: TabStateComponent, private service: FileAsSourceForJsonService ) { }

  ngOnInit() {
    this.guitarProgramNews = this.service.getNewsFeed() ;
    console.log("newsComponent is HERE");
  }

}
