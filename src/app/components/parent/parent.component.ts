import { Component, Input } from '@angular/core';

interface UserDataDTO{
  email: string;
  role: string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  @Input() name!: string;
  @Input() userData!: UserDataDTO;

  constructor(){}
}
