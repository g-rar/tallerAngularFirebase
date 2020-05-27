import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  textRecovered = "No hay texto recuperado";
  author = "No hay autor";
  notas = []
  newNoteForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private db:AngularFirestore) {
    this.newNoteForm = formBuilder.group({
      noteContent: "",
      noteAuthor: ""
    })
  }
  
  ngOnInit() {
  }
  
  getData(){
    // this.db.collection('notas').doc('notaPrueba').get().toPromise()
    //   .then((data) => {
    //     let note = data.data()
    //     this.textRecovered = note.contenido
    //     this.author = note.autor
    // })
    this.db.doc('/notas/notaPrueba/').get().toPromise()
      .then((data) => {
        let note = data.data()
        this.textRecovered = note.contenido
        this.author = note.autor
    })
  }

  writeInDb(formData) {
    let note = {
      contenido: formData.noteContent,
      autor: formData.noteAuthor
    }
    this.newNoteForm.reset();
    this.db.doc('/notas/notaPrueba/').set(note).then(() => {
      console.log("ya se subio a la bd");
    }).catch(error => {
      console.error(error)
    })
  }

  addNewNote(formData){
    let note = {
      contenido: formData.noteContent,
      autor: formData.noteAuthor
    }
    this.newNoteForm.reset()
    this.db.collection('/notas').add(note).then(()=> {
      console.log("ya se añadió a la BD");
    }).catch(error => {
      console.error(error)
    });
  }

  hacerConsulta() {
    this.db.collection('/notas', ref => ref.where('autor', '==', 'tulio').orderBy('fecha')).get().toPromise()
      .then((colRef) => {
        colRef.docs.forEach((docSnapshot) => {
          let note = docSnapshot.data() //esta sería la nota
          this.notas.push({autor : note.autor, contenido : note.contenido}) 
        })
      })
  }
}
