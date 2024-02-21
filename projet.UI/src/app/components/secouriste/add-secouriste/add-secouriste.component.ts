import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { secouriste } from 'src/app/models/secouriste.model';
import { SecouristesService } from 'src/app/services/secouristes.service';

@Component({
  selector: 'app-add-secouriste',
  templateUrl: './add-secouriste.component.html',
  styleUrls: ['./add-secouriste.component.css']
})
export class AddSecouristeComponent implements OnInit {

  addSecouristeRequest: secouriste = {
    id :'',
    name :'',
    email :'',
    phone :0,
    adress :''
  }
  constructor(private secouristeservice :SecouristesService, private router:Router){}

ngOnInit():void{}

addsecouriste(){
  this.secouristeservice.addsecouriste(this.addSecouristeRequest).subscribe({
    next: (secouriste)=> {
      this.router.navigate(['secouriste'])
      //      console.log(secouriste);
    }
  });
}
}
