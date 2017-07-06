import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
	tasks = ["Make Angular4 app", "Pandas", "Java JDBC", "watch BBT"];
	newItem = "";
	pushItem = function(){
		if(this.newItem != ""){
			this.tasks.push(this.newItem);
			this.newItem = "";
		}
	}

	removeItem = function(index){
		this.tasks.splice(index, 1);
	}
}
