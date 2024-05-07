import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.memberId = this.api.id;
    this.getMember(this.memberId);
    this.getBmember(this.memberId)
  }
  name = '';
  memberId: number = 0;
  memberA: any = {};
  selectedTab: string = 'tab1';
  member : any ;
  allMembers : any = []

  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }
  async getMember(id: number) {
    await this.api.getOneMember(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.memberA = data.member;
      },
      error: (err: any) => {
        console.log(err.message);
      },
    });
  }
  async getBmember(id: number) {
    await this.api.getBmember(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.member = data.data
        this.member.forEach((element: any) => {
          if (element.t27 != '') {
            this.allMembers.push(element);
          }
        });
      },
      error: (err: any) => {
        console.log(err.message);
      },
    });
  }
}
