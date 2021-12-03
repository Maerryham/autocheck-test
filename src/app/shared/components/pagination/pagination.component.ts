import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pagination;
  @Input() link;
  constructor() { }

  // lastPage;
  ngOnInit(): void {
  }
  lastPage() {
    console.log(this.pagination.total / this.pagination.pageSize);
    // return this.pagination.total / this.pagination.pageSize;
  }

}
