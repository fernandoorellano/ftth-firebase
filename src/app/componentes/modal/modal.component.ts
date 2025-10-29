import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { ListadofireService } from 'src/app/servicios/listadofire.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public listadoFireServ : ListadofireService, public fireServ: FirebaseService) { }

  ngOnInit(): void {
  }

}
