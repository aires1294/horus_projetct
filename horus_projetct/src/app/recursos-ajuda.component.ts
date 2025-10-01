import { Component, OnInit } from '@angular/core';
import { ContentService } from './content.service';

@Component({
  selector: 'app-recursos-ajuda',
  templateUrl: './recursos-ajuda.component.html',
})
export class RecursosAjudaComponent implements OnInit {
  helpResources: any[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getHelpResources().subscribe(resources => {
      this.helpResources = resources;
    });
  }

  callNumber(phone: string) {
    alert(`Ligando para: ${phone}`);
  }
}
