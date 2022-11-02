import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-notes',
  templateUrl: './special-notes.component.html',
  styleUrls: ['./special-notes.component.scss']
})
export class SpecialNotesComponent {
  @Input() text: string | null = null;

}
