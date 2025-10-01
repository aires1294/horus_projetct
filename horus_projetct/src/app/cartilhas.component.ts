import { Component, OnInit } from '@angular/core';
import { ContentService, Material } from './content.service';

@Component({
  selector: 'app-cartilhas',
  templateUrl: './cartilhas.component.html',
})
export class CartilhasComponent implements OnInit {
  materials: Material[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getMaterials().subscribe(materials => {
      this.materials = materials;
    });
  }

  downloadMaterial(material: Material) {
    // Simula download
    this.contentService.incrementDownload(material.id);
    if (material.fileUrl) {
      window.open(material.fileUrl, '_blank');
    }
  }
}

