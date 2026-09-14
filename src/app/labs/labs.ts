import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.html',
  styleUrl: './labs.scss',
})
export class Labs {
  
  name = 'Steven'
  person ={
    name : "Steven",
    age : 26,
    email : "steveninsuasti@gmail.com",
    profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-BhNy-tfenva6YuIMyMZZbfrLCGGfgLCh4l2LJqVkQ&s=10"

  }
  inputText = {
    name:"Ciudad",
    placeholder: "Ingrese su ciudad"
  }

  saludo() {
    alert("Hola" +  this.name)
  }
}
