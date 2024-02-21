import { Component, OnInit } from '@angular/core';
import { secouriste } from 'src/app/models/secouriste.model';
import { SecouristesService } from 'src/app/services/secouristes.service';

@Component({
  selector: 'app-secouriste-list',
  templateUrl: './secouriste-list.component.html',
  styleUrls: ['./secouriste-list.component.css']
})
export class SecouristeListComponent implements OnInit {
  secouristes : secouriste[]=[];

  constructor(private secouristesService:SecouristesService){ }

ngOnInit(): void{
  this.secouristesService.getAllsecouristes().subscribe({
    next:(secouristes)=>{
      this.secouristes = secouristes;
    },
    error:(Response)=>{
      console.log(Response);
    }

  })

}

}
