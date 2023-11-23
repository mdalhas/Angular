import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {
  teacherModel : Teacher = new Teacher();
  formValue !: FormGroup;
  teacherData : any;

  constructor (private teacher:TeacherService, private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group ({
      id:[],
      name:[''],
      dep:[''],
      gender:[''],
      hobby:[''],
    });
    this.getAll();
  }
  saveTeacher(){
    this.teacherModel.id = this.formValue.value.id;
    this.teacherModel.name = this.formValue.value.name;
    this.teacherModel.dep = this.formValue.value.dep;
    this.teacherModel.gender = this.formValue.value.gender;
    this.teacherModel.hobby = this.formValue.value.hobby;

    this.teacher.teacherPost(this.teacherModel)
    .subscribe(res =>{
      console.log(res);
      alert("Teacher Added")
      this.formValue.reset();
      this.getAll();
    },
    err=>{
      alert("Data Not Saved")
    }
    )

  }


  getAll(){
    this.teacher.getAllTeacher()
    .subscribe(res =>{
      this.teacherData = res;
    } )
  }

  deleteTeacher(row:any){
    this.teacher.deleteTeacher(row.id)
    .subscribe(res =>{
      console.log(res);
      alert("Teacher Deleted")
      this.formValue.reset();
      this.getAll();
    },
    err=>{
      alert("Data Not Deleted")
    }
    )
  }

  onEdit(row:any){
    this.teacherModel.id=row.id;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['dep'].setValue(row.dep);
    this.formValue.controls['gender'].setValue(row.gender);
    this.formValue.controls['hobby'].setValue(row.hobby);
 

  }

  teacherEdit(){
   
    this.teacherModel.name = this.formValue.value.name;
    this.teacherModel.dep = this.formValue.value.dep;
    this.teacherModel.gender = this.formValue.value.gender;
    this.teacherModel.hobby = this.formValue.value.hobby;
  
    this.teacher.editTeacher(this.teacherModel.id, this.teacherModel)
    .subscribe(res =>{
      console.log(res);
      alert("Teacher Updated")
      this.formValue.reset();
      this.getAll();
    },
    err=>{
      alert("Data Not Updated")
    }
    )
  
  }


}
