import { Component , OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup , ReactiveFormsModule } from '@angular/forms';
import { CommandHandlerService } from './Service/file.commmadhandler.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   *
   */

  result: string ='';
  constructor(private readonly fileService : CommandHandlerService){   
  
  }

 
  command= new FormControl()
  

  ngOnInit(): void {
    
  }

   

  Submit(): void { 
   const commadValue: string = this.command.value;
   const commandArry = commadValue.split(' ');
    if(commandArry.length > 0) { 
      this.result = this.fileService.handleCommand(commandArry[0],[commandArry[1]]);
    }
  }

}
