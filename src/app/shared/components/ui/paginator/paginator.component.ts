import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Link } from '../../../models/response';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() links: Link[] = [];
  @Output() currentUrl: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  paginate(url: any) {
      this.currentUrl.emit(url);
  }
}
