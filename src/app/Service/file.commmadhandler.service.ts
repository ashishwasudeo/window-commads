import { ParseError } from '@angular/compiler';
import { Injectable} from '@angular/core'
import {FileStucture} from 'src/app/models/file-structure.model'

@Injectable()
export class CommandHandlerService {

   private filestructure: FileStucture = {
       currentDir:'',
       fileData:'',
       subFolderData:[]
   } 
   handleCommand(command: string, params:string[]): string {
       switch (command) {
           case 'help':
               return this.help();

            case 'md':
                return this.md(params[0]);

            case 'cd':
                return this.cd(params[0]);

            case 'cd..':
                return this.cdtoParent(); 

             case 'dir':
                 return this.dir(params[0]);

             case 'mkdir':              
                 return this.mkdir(params[0]);
           default:
               break;
       }
   }

   help(): string {
     return `help Prints a help menu, with short description of all the commands, 
             md [directory name] Creates a directory,  For example: md dir1, 
             cd [directory name] Changes the current directory, for example: cd dir1, 
             cd .. Changes the current directory to parent directory, 
             mkdir [file name] Creates a file, for example: mf file.txt, 
             dir Displays list of files and subdirectories in current directory, 
             dir /s Displays files in specified directory and all subdirectories, 
             exit Quits the program`
    } 

    md(directoryname: string): string {
        const newDir: FileStucture =  {
            currentDir : directoryname,
            fileData : '/',
            subFolderData : []
        }
        this.filestructure.subFolderData.push(newDir)
        return this.filestructure.fileData + '/' + directoryname ;
    }

    cd(dirname: string): string {
        this.filestructure.currentDir = dirname;
        return this.filestructure.fileData = dirname + '/';
    }

    cdtoParent(): string {
        return '';
    }

    mkdir(filename: string): string {
        this.filestructure.fileData = this.filestructure.fileData + "/" + filename
        return this.filestructure.fileData ;
    }

    dir(param:string): string {

    let dirData = this.filestructure;
    let str: string = '';
        while(dirData.subFolderData.length != 0){
            str+= dirData.fileData;
        }
        return str;
    }

}