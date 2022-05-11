import { Domain } from './../../../../Model/domain';
import { QuizService } from './../../../../services/quiz.service';
import { TrainingService } from './../../../../services/training.service';
import { Training } from 'src/app/Model/training';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  domains = ['Couture',
    'Coiffure',
    'Cuisine',
    'Informatique',
    'Entreprenariat',
    'Architacture',
    'Marketing',
    'Sante',
    'Economie',
    'Communication',
   'Mecanique'];

   levels = ['Beginner',
    'Intermediate',
    'Advanced'];

    urllink:String = "assets/images/";
  listTrainings: Training[] = [];
  training: Training = new Training();;
  search_Text:any;
  p: number = 1 ;
  show_form_new:boolean=false;
  list:boolean=true;
  detail:boolean=false;
  Update_form=false;

  userFile ;
  public imagePath;
  imgURL: any;
  public message: string;

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  
  imageName: any;


  form:FormGroup;


 
  show_quiz:boolean=false;
  
  constructor(public  _service:TrainingService, private router:Router, public fb: FormBuilder,private quizService:QuizService) { }
  get f() { return this._service.dataForm.controls; }
  ngOnInit(): void {
   this.creatForm();
    this._service.fetchAll().subscribe((data:Training[]) => (this.listTrainings = data));
  console.log(this.listTrainings)
 
  }
  // infoForm() {
  //   this._service.dataForm = this.fb.group({
  //       id: null,
  //       subject: ['', [Validators.required]],
        
  //       //trainerName: ['', [Validators.required]],
        
  //       image: ['', [Validators.required]],
        
  //     });
  //   }

  private getTrainings(){
    this._service.fetchAll().subscribe(training => this.listTrainings = training);
  }

  // updateTraining(t:Training){
  //   this.training=t;
  //   this.show_update_form();

  //   //this.router.navigate(['/update-training', id]);  
  // }

  updateTraining(id:number){
    this.router.navigate(['/update-training', id]);  
  }

  deleteTraining(id:number){
    this._service.deleteTraining(id).subscribe(data =>{
      console.log(data);
      this.getTrainings();
    });    
  }

  // detailsTraining(id:number){
  //   this.router.navigate(['/training-details', id]);
  // }

  detailsTraining(t:Training){
    this.training=t;
    this.show_datail();
  }

  search(){
    if(this.search_Text== ""){
      this.ngOnInit();
    }
    else{
      //console.log(this.search_Text);
      this.listTrainings=this.listTrainings.filter(res=>{ return res.subject.toLocaleLowerCase().match(this.search_Text.toLocaleLowerCase());
      });      
    }      
  }

  key: String = 'id';
  reverse: boolean = false;

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  clickMethod(name: number) {
    if(confirm("Are you sure to delete "+name)) {
      this.deleteTraining(name);
    }
  }

 

  selectFiles(event){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.urllink = event.target.result;
        //this.training.image=event.target.result
        console.log("hhh"+this.training.image);
      }

    }
  }
  


  onSubmit(){
    if (this._service.choixmenu == "A")
    {
      this.saveTraining();
    }
     
    // console.log("this.training");
    // this.saveTraining();
    this.router.navigate(['/training'])  
  }




  saveTraining(){
    this.training.image="algebre.jpg";
    // this._service.createData(this.training).subscribe(), error=> console.log(error);
    this.ngOnInit();
    this.show_list();
    window.location.reload();
    
  }

  show_datail(){
    this.show_form_new=false;
    this.list=false;
    this.Update_form=false;
    this.detail = true;

    
  }

  show_new(){
    // this.training=null;
    // this.list=false;
    // this.detail = false;
    this.show_form_new=true;
  }

  show_list(){
    this.show_quiz=false;
    this.show_form_new=false;
    this.detail = false;
    this.Update_form=false;
    this.list=true;
  }

  show_update_form(t){
    console.log(t.id)
    this.form = this.fb.group(
      {
        id:[t.id],
        subject: [t.subject],
        domain: [t.domain],
        description: [t.description],
        startDate: [t.startDate],
        // endDate: [null, Validators.required, RxwebValidators.minDate(this.startDate)],
        nbreMax: [t.nbreMax],
        trainerName: [t.trainerName],
        isCertified:[t.isCertified], 
        price:[t.price], 
        level:[t.level], 
        duration:[t.duration],
      }
    );
    this.imgURL=t.image;
    this.show_form_new=false;
    this.detail = false;
    this.list=false;
    this.urllink=t.image;
    this.Update_form=true;
    console.log(this.imgURL)

  }

  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  

}


onChange(deviceValue) {
 this.training.domain=deviceValue;
  
}

show_quiz_todo(deviceValue){

  console.log(deviceValue);
  this.show_quiz=true;
}
//this.trainig;
detailsQuiz(id:number){
  this.router.navigate(['/details-quiz', id]);
  }
// detailsQuiz(id: number){
//   this.quiz=q;
//   this.show_quiz_todo();
// }



creatForm(){
  this.form = this.fb.group(
    {
      id:[''],
      subject: [null, Validators.required],
      domain: [null, Validators.required],
      description: [null, Validators.required],
      startDate: [null, Validators.required],
      // endDate: [null, Validators.required, RxwebValidators.minDate(this.startDate)],
      nbreMax: [null, Validators.required],
      trainerName: [null, Validators.required],
      isCertified:[null], 
      price:[null, Validators.required], 
      level:[null], 
      duration:[null, Validators.required],
    }
  );
}

get duration() {
  return this.form.get('duration');
}

get level() {
  return this.form.get('level');
}
get price() {
  return this.form.get('price');
}

get trainerName() {
  return this.form.get('trainerName');
}

get nbreMax() {
  return this.form.get('nbreMax');
}

get endDate() {
  return this.form.get('endDate');
}

get startDate() {
  return this.form.get('startDate');
}

get subject() {
  return this.form.get('subject');
}

get domain() {
  return this.form.get('domain');
}

get description() {
  return this.form.get('description');
}


public onFileChanged(event) {
  //Select File
  this.selectedFile = event.target.files[0];
  const file = event.target.files[0];
  this.urllink = file;
  console.log(file)
}

onSave(){
  // this.trainingService.createData(this.form.value).subscribe();
  this.addData();
   console.log(this.form.getRawValue())
   //this.result = this.form.getRawValue();
 }

addData() {
  // const formData = new  FormData();

  const formData = new FormData();
  const article = this.form.value;
  this.training = this.form.value;
  formData.append('article',JSON.stringify(this.training));
  console.log(JSON.stringify(this.training));
 // formData.append('article',this.form.value);
  formData.append('imageFile', this.selectedFile, this.selectedFile.name);


  
  // formData.append('file',this.userFile);
  this._service.updateData(formData).subscribe( data => {
   //this.ngOnInit();
    this.router.navigate(['/training']); 
  });
}






}