import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantComponent implements OnInit {

  etudiants: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getAllEtudiants();
  }

  getAllEtudiants() {
    this.etudiantService.getAllEtudiants().subscribe(
      (data: Etudiant[]) => {
        this.etudiants = data;
      },
      error => {
        console.error('Une erreur est survenue lors de la récupération des étudiants : ', error);
      }
    );
  }

  deleteEtudiant(id: number) {
    if (confirm("Voulez-vous vraiment supprimer cet étudiant ?")) {
      this.etudiantService.deleteEtudiant(id).subscribe(
        () => {
          alert('Suppression effectuée avec succès');
          this.getAllEtudiants(); // Recharger la liste des étudiants après la suppression
        },
        error => {
          console.error('Une erreur est survenue lors de la suppression de l\'étudiant : ', error);
        }
      );
    }
  }
}
