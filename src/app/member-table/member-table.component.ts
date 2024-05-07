import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.css'],
})
export class MemberTableComponent implements OnInit {
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getAllmember();
  }
  member: any;
  AllMembers: any = [];
  searchText: any;
  

  async getAllmember() {
    await this.api.getAllmember().subscribe({
      next: (data: any) => {
        console.log(data);
        this.member = data.member;
        this.member.forEach((element: any) => {
          if (element.t9 != '') {
            this.AllMembers.push(element);
          }
        });
        console.log(this.AllMembers.length);
        
        // this.visibleData();
        // this.PageNumber();
      },
      error: (err: any) => {
        console.log(err.message);
      },
    });
  }
  
  //  for pagination
  currentPage: number = 1;
  pageSize: number = 10;

  // visibleData() {
  //   let startedIndex = (this.currentPage - 1) * this.pageSize;
  //   let endIndex = startedIndex + this.pageSize;

  //   this.myMembers = this.AllMembers.slice(startedIndex, endIndex);
  // }

  // nextPage() {
  //   this.currentPage++;
  //   this.visibleData();
  // }
  // previousPage() {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //   }
  //   this.visibleData();
  // }
  // PageNumber() {
  //   let totalPages = Math.ceil(this.AllMembers.length / this.pageSize); // Use Math.ceil to round up to the nearest integer
  //   let pageNumberArray = Array.from(
  //     { length: totalPages },
  //     (_, index) => index + 1
  //   ); // Create an array with page numbers
  //   return pageNumberArray;
  // }

  // changePage(pageNo: number) {
  //   this.currentPage = pageNo;
  //   this.visibleData();
  // }

  setId(id : number){
    this.api.id = id;
    console.log(id,">>>>>>>>>>")
  }
}
