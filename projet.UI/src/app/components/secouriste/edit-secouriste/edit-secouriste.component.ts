import { Component, OnInit } from '@angular/core';
import { secouriste } from 'src/app/models/secouriste.model';
import { SecouristesService } from 'src/app/services/secouristes.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-secouriste',
  templateUrl: './edit-secouriste.component.html',
  styleUrls: ['./edit-secouriste.component.css']
})
export class EditSecouristeComponent implements OnInit {

secouristedetails :secouriste = {
  id: '',
  name :'',
  email :'',
  phone: 0,
  adress:''
};
constructor(private route: ActivatedRoute, private secouristeservice: SecouristesService, private router: Router) { }

ngOnInit(): void {
  this.route.paramMap.subscribe({
    next: (params) => {
      const id = params.get('id');

      if (id) {
          this.secouristeservice.getsecouriste(id)
          .subscribe
          ({
            next: (response) => {
              this.secouristedetails = response;
            }
      });
      }
    }
  })
}
updatesecouriste(){
  this.secouristeservice.updatesecouriste(this.secouristedetails.id,this.secouristedetails)
  .subscribe({
    next: (response) =>  {
      this.router.navigate(['secouristes']);
    }
  });
}


deletesecouriste(id: string){
    this.secouristeservice.deletesecouriste(id)
    .subscribe({
      next:(response) => {
        this.router.navigate(['secouristes']);
      }
    });
}
}

