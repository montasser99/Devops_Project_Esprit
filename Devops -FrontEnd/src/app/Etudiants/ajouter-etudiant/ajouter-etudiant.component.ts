import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { EtudiantService } from 'src/app/etudiant.service';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {
  
  constructor(private etudiantService: EtudiantService, private router: Router) { }

  ngOnInit(): void {
  }

  addEtudiant(form: NgForm): void {
      if (form.valid) {
        const newEtudiant: Etudiant = {
          fname: form.value.fname, // Utilisez "fname" au lieu de "nomEt"
          lname: form.value.lname, // Utilisez "lname" au lieu de "prenomEt"
          password: form.value.password,
          idOperateur : 0 
        };

      this.etudiantService.addEtudiant(newEtudiant).subscribe(
        () => {
          // Redirige vers la liste des étudiants après l'ajout réussi
          this.router.navigate(['/etudiants']);
        },
        error => {
          console.error('Une erreur est survenue lors de l\'ajout de l\'étudiant : ', error);
        }
      );
    }
  }
}
