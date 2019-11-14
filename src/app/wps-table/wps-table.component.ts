import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'; 
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

/**
 * @title Table with sticky header
 */
@Component({
  selector: 'wps-table-component',
  styleUrls: ['wps-table.component.css'],
  templateUrl: 'wps-table.component.html',
})
export class WpsTableComponent {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns = ['actions','permitType', 'permit', 'contact', 'issuedTime','asset','status','pendingOn','securityAck','securityApproved','comments'];
  
  dataSource = new MatTableDataSource(PERMIT_DATA);

  suspended = false;

  constructor(public dialog: MatDialog) {}

  openSuspendDialog(suspendButton): void {    
    const dialogRef = this.dialog.open(SuspendDialog, {width:'400px'});

    dialogRef.afterClosed().subscribe(result => {
      if (result)
      {
        suspendButton.classList.remove('unsuspended');
        suspendButton.classList.add('suspended');
        this.suspended = true;
      }
      
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  suspendAll($event) {    
    if (this.suspended)
    {
      this.suspended = !this.suspended;
      $event.target.classList.remove('suspended');
      $event.target.classList.add('unsuspended');
    }
    else {
      this.openSuspendDialog($event.target);      
    }    
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

@Component ({
  selector: 'suspend-dialog',
  templateUrl: 'suspend-dialog.html',
})
export class SuspendDialog {
  constructor(
    public dialogRef: MatDialogRef<SuspendDialog>,
    @Inject(MAT_DIALOG_DATA) public data: boolean) {
      this.data = false;
    }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  onSuspendClick(): void {
    this.data = true;
    this.dialogRef.close(this.data);
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface WorkPermit {
  permitType: string;
  permit: string;
  contact: string;
  issuedTime: Date;
  asset: string;
  status: string;
  pendingOn: string;
  securityAck?: boolean;
  securityApproved?: boolean;
}

const PERMIT_DATA: WorkPermit[] = [
  {permitType:'KWI-ET2-19-0103', permit:'EGRESS Template 2#', contact:'',issuedTime:new Date(2019,11,13), asset:'PLUM-823B-EOG-1', status:'CLOSED',pendingOn:'Gas Tester',securityAck:true,securityApproved:null},
  {permitType:'KWI-CSE-19-0106', permit:'CONFINED SPACE ENTRY PERMIT', contact:'',issuedTime:new Date(2019,11,13), asset:'ELCT-MS-03-36-07', status:'ACTIVE',pendingOn:'Gas Tester',securityAck:true,securityApproved:null},
  {permitType:'KWI-HW-19-0116', permit:'HOT WORK PERMIT', contact:'',issuedTime:new Date(2019,11,13), asset:'RELAY-PJHV3-CC6Q-MTR', status:'ACTIVE',pendingOn:'Gas Tester',securityAck:null,securityApproved:null},
  {permitType:'KWI-CSE-19-0119', permit:'CONFINED SPACE ENTRY PERMIT', contact:'',issuedTime:new Date(2019,11,13), asset:'RAIL-HM-SEFS-1', status:'ACTIVE',pendingOn:'Gas Tester',securityAck:true,securityApproved:null},
  {permitType:'KWI-FFS-19-0128', permit:'Fall from height Test', contact:'',issuedTime:new Date(2019,11,13), asset:'PLC-CH14-12-01-02-08', status:'PENDING FOR APPROVAL',pendingOn:'Gas Tester',securityAck:null,securityApproved:false},
  {permitType:'KWI-FFH-19-0129', permit:'Fall from height Test', contact:'',issuedTime:new Date(2019,11,13), asset:'MOTOR-PJ257-FTP001-OLD', status:'ACTIVE',pendingOn:'Gas Tester',securityAck:true,securityApproved:null},
  {permitType:'KWI-HTWP-19-0178', permit:'Hot Work Test Permit', contact:'',issuedTime:new Date(2019,11,13), asset:'VSDRIVE-WG030-CRP002', status:'DRAFT',pendingOn:'Gas Tester',securityAck:true,securityApproved:null},
]

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
