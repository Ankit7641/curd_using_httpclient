import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.scss']
})
export class NgtemplateComponent implements OnInit {

  name = 'Angular';

  title = 'ngTemplateOutlet Example';
 
  @ViewChild('cardTemplate') cardTemplate!:TemplateRef<HTMLElement>;
  @ViewChild('listTemplate') listTemplate!:TemplateRef<HTMLElement>;
 
  mode ="card"
 
  items = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals'
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript'
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    },
  ];
 
  modeOptions = [
    { mode: "card" },
    { mode: "list" },
  ];
 
  get template() {
 
    if(this.mode=="list") return this.listTemplate
    return this.cardTemplate
  }

  constructor() { }

  ngOnInit(): void {
  }

}
