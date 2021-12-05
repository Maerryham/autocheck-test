import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pagination;
  @Input() link;
  // lastPageNo;
  constructor() {
  }

  // lastPage;
  ngOnInit(): void {
    // this.lastPage();
  }
  // lastPage(): void {
  //   this.lastPageNo = this.pagination.total / this.pagination.pageSize;
  // }

}
