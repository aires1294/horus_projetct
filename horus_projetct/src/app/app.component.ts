import { Component, OnInit } from '@angular/core';
import { ContentService, Material } from './content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Prevenção Dependente Química';

  previewMaterials: Material[] = [];
  previewHelp: any[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getMaterials().subscribe(materials => {
      this.previewMaterials = materials.slice(0, 2); // mostra só 2
    });

    this.contentService.getHelpResources().subscribe(resources => {
      this.previewHelp = resources.slice(0, 2); // mostra só 2
    });
  }
}
