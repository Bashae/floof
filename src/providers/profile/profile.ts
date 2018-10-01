import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Post } from "../../app/post";
import { AuthProvider } from '../auth/auth';
import { Events } from 'ionic-angular';

@Injectable()
export class ProfileProvider {
  usersCollection: AngularFirestoreCollection<any>;
  users: Observable<any[]>;
  userDoc: AngularFirestoreDocument;

  constructor(
    private afs: AngularFirestore
  ) {
    this.usersCollection = this.afs.collection('users');
  }

  getUserInfo(id) {
    return this.usersCollection.ref
    .where('u_id', '==', id)
    .get();
  }

}
