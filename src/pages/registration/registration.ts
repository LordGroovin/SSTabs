import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { LoadingController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController) {}

  onSignup(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Registering your new account...'
    })
    loading.present();
    this.authService.signup(form.value.email, form.value.password)
    .then(data => {
      loading.dismiss();
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Registration Unsuccessful',
        message: error.message,
        buttons:['OK']
      });
      alert.present();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
