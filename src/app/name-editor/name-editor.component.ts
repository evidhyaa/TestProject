import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  // name = new FormControl('');
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    eMail: ['', Validators.required],
    mobNumber: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required]
   
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }

}
