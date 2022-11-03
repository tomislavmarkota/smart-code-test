import { Component } from '@angular/core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss'],
})
export class KeywordsComponent {
  keywords: string[] = [
    'Nogomet',
    'Italija',
    'Serie A',
    'Genua',
    'Italien',
    'Fussball',
    'Soccer',
  ];

  
}
