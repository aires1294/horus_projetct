import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Material {
  id: number;
  title: string;
  description: string;
  type: 'cartilha' | 'folheto' | 'rede-social';
  fileUrl?: string;
  imageUrl?: string;
  downloadCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  
  private materials: Material[] = [
    {
      id: 1,
      title: 'Cartilha de Prevenção ao Uso Abusivo',
      description: 'Guia completo sobre prevenção e identificação precoce',
      type: 'cartilha',
      fileUrl: '/assets/pdfs/cartilha-prevencao.pdf',
      imageUrl: '/assets/images/cartilha1.jpg',
      downloadCount: 150
    },
    {
      id: 2,
      title: 'Sinais de Alerta - O que observar',
      description: 'Identifique os primeiros sinais do uso problemático',
      type: 'folheto',
      fileUrl: '/assets/pdfs/sinais-alerta.pdf',
      imageUrl: '/assets/images/folheto1.jpg',
      downloadCount: 89
    },
    {
      id: 3,
      title: 'Posts para Redes Sociais - Saúde Mental',
      description: 'Conteúdo pronto para compartilhar nas redes',
      type: 'rede-social',
      fileUrl: '/assets/pdfs/posts-redes-sociais.pdf',
      imageUrl: '/assets/images/redes-sociais.jpg',
      downloadCount: 203
    }
  ];

  private helpResources = [
    {
      name: 'CVV - Centro de Valorização da Vida',
      phone: '188',
      description: 'Atendimento 24h para apoio emocional'
    },
    {
      name: 'CAPS - Centro de Atenção Psicossocial',
      phone: 'Disque Saúde 136',
      description: 'Atendimento especializado em saúde mental'
    },
    {
      name: 'Clínica Especializada',
      phone: '(XX) XXXX-XXXX',
      description: 'Atendimento psicológico especializado'
    }
  ];

  getMaterials(): Observable<Material[]> {
    return of(this.materials);
  }

  getHelpResources() {
    return of(this.helpResources);
  }

  incrementDownload(materialId: number) {
    const material = this.materials.find(m => m.id === materialId);
    if (material) {
      material.downloadCount++;
    }
  }
}
