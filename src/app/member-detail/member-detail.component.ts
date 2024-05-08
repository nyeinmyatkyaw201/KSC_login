import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  constructor(private api: ApiService,private router: Router) {}
  ngOnInit(): void {
    this.memberId = this.api.id;
    this.getMember(this.memberId);
    this.getBmember(this.memberId);
    this.getPhoto(this.memberId)
  }
  name = '';
  imageUrls: string[] = [];
  uploadedFiles: any[] = [];
  memberId: number = 0;
  memberA: any = {};
  selectedTab: string = 'tab1';
  member : any ;
  allMembers : any = []
  showPopup: boolean = false;
  visible: boolean[] = Array(this.uploadedFiles.length).fill(false);
  zoomLevel: number = 1;

  viewImage(index : any) {
    this.showPopup = true;
    this.visible[index] = !this.visible[index];
    const file = this.uploadedFiles[index];
    console.log(file)
    if (file && file.t1) {
      this.imageUrls = []; 
      const imageUrl = file.t1;
      this.imageUrls.push(imageUrl); 
      console.log(this.imageUrls)
    } else {
      console.error("Invalid file object:", file);
    }
  }

  closePopup() {
    this.showPopup = false;
    this.visible = this.visible.map(() => false);
    this.zoomLevel = 1;
  }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.zoomIn();
    } else {
      this.zoomOut();
    }
    
    event.preventDefault();
  }
  zoomIn() {
    if(this.zoomLevel  < 2){
      this.zoomLevel += 0.1;
    }
  }

  zoomOut() {
    if (this.zoomLevel > 0.5) { 
      this.zoomLevel -= 0.1;
    }
  }

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
  async getPhoto(id : any){
    await this.api.Uploadedfile(id).subscribe({
      next: (data: any)=>{
        console.log(data)
        this.uploadedFiles = data.data
      },
      error: (err : any)=>{
        console.log(err)
      }
    })
  }
  back(){
    this.router.navigateByUrl('membertable')
  }
 
}
