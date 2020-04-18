import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  public departmentId;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.departmentId = id

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id = parseInt(paramMap.get('id'))
      this.departmentId = id;
    })

  }
  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/department', previousId]);

  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department', nextId]);
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo: this.activatedRoute})
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo: this.activatedRoute})
  }

}
