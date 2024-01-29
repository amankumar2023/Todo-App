import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo-List';
  name: string ;
  list : string[];
  task : string;

  ngOnInit()
  {
    this.list=[];
    this.task="";
  }
  
  addTask()
  {
    if(this.task!=="")
    {
      this.list.push(this.task);
    }
    this.task="";
  }

  delete(t:string)
  {
    this.list=this.list.filter(item => item !== t);

  }
}
