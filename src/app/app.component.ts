import { Component } from '@angular/core';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pw';
  letters:boolean = undefined;
  numbers:boolean = undefined;
  symbols:boolean = undefined;
  uppercase:boolean = undefined;
  
  length:number = 0;

  validCharacters:string = '';

  alphabetsValid = 'abcdefghijklmnpqrstuvwxyz';
  symbolsValid = '~!@#$%^&*()_+=-`';
  numbersValid = '0123456789';
  uppercaseValid = 'abcdefghijklmnpqrstuvwxyz'.toUpperCase();

  password:string = ''

  onClicked() {
    console.log('Button was Clicked')
  }
  handleChange(event){
    // if (event.target.getAttribute('data-type') === "letters"){
    //   this.letters = event.target.checked;
    // }
    // if (event.target.getAttribute('data-type') === "numbers"){
    //   this.numbers = event.target.checked;
    // }
    // if (event.target.getAttribute('data-type') === "symbols"){
    //   this.symbols = event.target.checked;
    // }
    console.log(this.letters,this.numbers,this.symbols)
    console.log(event.target.getAttribute('data-type'))
  }

  handleLengthChange(e:Event){
    const parsedNumber = parseInt((<HTMLInputElement>e.target).value);
    if (isNaN(parsedNumber)){
      return
    }
    this.length = parsedNumber;
  }

  handlePassword(){
    if (this.length > 0 && this.length < 30){
      let finalPassword:string = '';

      let valid:string = '';

      if (this.letters){
        valid = valid + this.alphabetsValid;
      }
      if (this.numbers){
        valid = valid + this.numbersValid;
      }
      if (this.symbols){
        valid = valid + this.symbolsValid;
      }
      if (this.uppercase){
        valid = valid + this.uppercaseValid;
      }

      for (let x = 0; x < this.length; x++){
        const index = Math.floor(Math.random() * valid.length);
        finalPassword = finalPassword + valid[index];
      }

      this.password = finalPassword;
            
    }
  }
}
