import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/servicios/services.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  coleccion = 'juguetes';
  juguetes: any[] = [];
  displayedColumns: string[] = ['ID', 'Nombre', 'Descripcion', 'Edad', 'Importe'];

  constructor(private firebase: ServicesService) { }

  ngOnInit(): void {
    this.firebase.getAll(this.coleccion).subscribe(
      (resp: any) => {
        this.juguetes = [];
        resp.forEach( (juguetesSnapshot: any) => {
          this.juguetes.push(
            {
              docId: juguetesSnapshot.payload.doc.id,
              ...juguetesSnapshot.payload.doc.data()
            }
          )
        });
      }
    )
  }
    
  
}
