import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Native Tools
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageProvider } from '../providers/storage/storage';
import { AuthProvider } from '../providers/auth/auth';
import { PostProvider } from '../providers/post/post';

export const firebaseConfig = {
  apiKey: "AIzaSyD_GxRelXFpRb8FqAcl-_tdNCqmK81HfWM",
  authDomain: "floof-3b8b4.firebaseapp.com",
  databaseURL: "https://floof-3b8b4.firebaseio.com",
  projectId: "floof-3b8b4",
  storageBucket: "floof-3b8b4.appspot.com",
  messagingSenderId: "403930975798"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    AngularFireAuth,
    AngularFirestore,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    AuthProvider,
    PostProvider
  ]
})
export class AppModule {}
