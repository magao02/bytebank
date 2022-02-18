import { Transferencia } from '../models/transferencia.model';
import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();
  valor : number;
  destino : number;
  constructor(private service: TransferenciasService, private router: Router) { }

  ngOnInit(): void {
  }
  transferir(){
    console.log('nova transferencia')
    const valorEmitir: Transferencia ={ valor: this.valor, destino: this.destino}
    //this.aoTransferir.emit(valorEmitir)
    this.service.adicionar(valorEmitir).subscribe(resultado=>{
      console.log(resultado)
      this.limparCampos()
      this.router.navigateByUrl('extrato')
    })

  }
  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
