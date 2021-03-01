import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  public goToCadastro(): void{
    this.router.navigate(['cadastro']);
  }

}
