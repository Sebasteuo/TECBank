import { Component, OnInit } from '@angular/core';
import { ReportManagementService } from 'src/app/Services/report-management.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  constructor(private reportService: ReportManagementService) { }

  report:String[]=[]
  source: any ="../../../assets/files/pdf-test.pdf"
  ngOnInit(): void {
    this.reportService.getReport().then(res=>{
      this.report=res
    })
  }

}
