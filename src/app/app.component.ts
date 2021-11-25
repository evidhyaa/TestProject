import { Component,ViewChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Forms';
 
  @ViewChild('angularcontent') angularContent: any;
  @ViewChild('javacontent') javaContent: any;

  public changeAngular()
  {
    console.log("changeAngular");
    this.angularContent.nativeElement.setAttribute("style", "color:red");
  }

  public changeJava()
  {
    console.log("changeJava");
    this.javaContent.nativeElement.setAttribute("style", "color:green");
  }
}
