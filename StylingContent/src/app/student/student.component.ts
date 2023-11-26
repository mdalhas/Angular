

import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  teacherModel : Student = new Student();
  formValue !: FormGroup;
  teacherData : any;

  constructor (private teacher:StudentService, private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group ({
      id:[],
      name:[''],
      dob:[''],
      gender:[''],
      hobby:[''],
      bloodGroup:['']
    });
    this.getAll();
  }
  saveTeacher(){
    this.teacherModel.id = this.formValue.value.id;
    this.teacherModel.name = this.formValue.value.name;
    this.teacherModel.dob = this.formValue.value.dob;
    this.teacherModel.gender = this.formValue.value.gender;
    this.teacherModel.hobby = this.formValue.value.hobby;
    this.teacherModel.bloodGroup = this.formValue.value.bloodGroup;

    this.teacher.teacherPost(this.teacherModel)
    .subscribe(res =>{
      console.log(res);
      alert("Student Added")
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
      alert("Student Deleted")
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
    this.formValue.controls['dob'].setValue(row.dob);
    this.formValue.controls['gender'].setValue(row.gender);
    this.formValue.controls['hobby'].setValue(row.hobby);
    this.formValue.controls['bloodGroup'].setValue(row.bloodGroup);

  }

  teacherEdit(){
   
    this.teacherModel.name = this.formValue.value.name;
    this.teacherModel.dob = this.formValue.value.dob;
    this.teacherModel.gender = this.formValue.value.gender;
    this.teacherModel.hobby = this.formValue.value.hobby;
    this.teacherModel.bloodGroup = this.formValue.value.bloodGroup;

    this.teacher.editTeacher(this.teacherModel.id, this.teacherModel)
    .subscribe(res =>{
      console.log(res);
      alert("Student Updated")
      this.formValue.reset();
      this.getAll();
    },
    err=>{
      alert("Data Not Updated")
    }
    )
  
  }


}

