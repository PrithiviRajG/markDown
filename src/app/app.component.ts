import { Component, ElementRef, ViewChild } from '@angular/core';
import {SimpleMDE} from 'simplemde';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  markdownContent : any;

  

		constructor() {
			this.markdownContent="type something";
		}

		ngAfterViewInit(){
			
		}

    updateContent(){
      
      console.log(this.markdownContent);
    }

    

    

    



  title = 'app works!';
}
