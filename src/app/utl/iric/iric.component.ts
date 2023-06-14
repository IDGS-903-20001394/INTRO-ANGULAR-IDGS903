import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
  alumnos: any[] = [
    {
      "matricula": 1234,
      "nombre": "Mario",
      "edad":23,
      "correo": "mario@gmail.com",
      "pago":129.42,
      "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUalzBQF2EAjyyygjRRhsgBhEbH1wcJx4N2g&usqp=CAU"
    },
    {
      "matricula": 333,
      "nombre": "Dario",
      "edad":24,
      "correo": "dario@gmail.com",
      "pago":2349.9,
      "foto": "https://pm1.aminoapps.com/7397/6c462795fdf2de256f13fa1e976347bc6ebd54f8r1-221-228v2_00.jpg"
    },
    {
      "matricula": 1234,
      "nombre": "Juan",
      "edad":20,
      "correo": "juan@gmail.com",
      "pago":129.42,
      "foto": "https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/83278207_2555632788043216_4271045668191076352_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFiCImKO4TeL0EOhxP9cihyF3i9bNFD2eQXeL1s0UPZ5ONN1J5TRlqF3i9xjd_XGB2e1r5egjMRIwe5J9fPj49R&_nc_ohc=Sgmx7fKxqn4AX9tGk-Y&_nc_ht=scontent.fntr4-1.fna&oh=00_AfDTNGGf2KMcacCYzLU9j7aiL-ZyQHFX029PAHMhxT9TaQ&oe=64B09047"
    }
  ]
}
