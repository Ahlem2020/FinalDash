import { Router } from '@angular/router';
import { TrainingService } from './../../../../services/training.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Training } from 'src/app/Model/training';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { min } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.css']
})
export class CreateTrainingComponent implements OnInit {

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;


  form:FormGroup;
  // public message: string;
  imgURL: any;
  userFile ;
  public imagePath;
  domains = [ 'Couture',
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

  training:Training=new Training();
  urllink:String = "assets/images/";
  public training_image:any = File;
  reactiveForm:any = FormGroup;
  show_form_new:boolean=true;

  constructor(private fb:FormBuilder, private trainingService: TrainingService,  private router : Router, private httpClient: HttpClient) { 
    // this.reactiveForm = this.fb.group({
    //   subject:new FormControl(''),
    //   description:new FormControl(''),
    //   domain:new FormControl(''),
    //   trainerName:new FormControl(''),
    //   startDate:new FormControl(''),
    //   endDate:new FormControl(''),
    //   isCertified:new FormControl(''),
    //   capacity:new FormControl(''),

    // })
  }

  

  get f() { return this.trainingService.dataForm.controls; }

  ngOnInit(): void {
    this.creatForm();
  }

  creatForm(){
    this.form = this.fb.group(
      {
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

 
  show_list(){

  }

  onChange(e){
    this.training.domain=e;

  }

  onSave(){
   // this.trainingService.createData(this.form.value).subscribe();
   this.addData();
    console.log(this.form.getRawValue())
    //this.result = this.form.getRawValue();
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
      this.trainingService.createData(formData).subscribe( data => {
      
        this.router.navigate(['/training']); 
      });
    }
  // updateData()
  // {
  //   this.trainingService.updatedata(this.trainingService.dataForm.value.id,this.trainingService.dataForm.value).
  //   subscribe( data => {
  //     this.dialogRef.close();
  //     this.router.navigate(['/articles']); 
  //   });
  // }



  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    // this.httpClient.post('http://localhost:8083/women/image/upload', uploadImageData, { observe: 'response' })
    //   .subscribe((response) => {
    //     if (response.status === 200) {
    //       this.message = 'Image uploaded successfully';
    //     } else {
    //       this.message = 'Image not uploaded successfully';
    //     }
    //   }
    //   );


  }
  
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    const file = event.target.files[0];
    this.urllink = file;
  }



  onSelectFiles(event){
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    const file = event.target.files[0];
    this.urllink = file;

  //   const file = event.target.files[0];
  //  this.urllink = file;
  //   this.training_image = file;
  //   console.log(this.training_image);
  }

  onSubmit() {
   
      this.addData();
 
}

  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        console.log("Only images are supported.");
        return;
    }

    var reader = new FileReader();
    let image = {
      imagePath: null,
      imageName: null
    }
    image.imagePath = files;
    reader.readAsDataURL(files[0]);
    image.imageName = files[0].name;
    console.log(image)
    reader.onload = (_event) => {
        let uploadedImage = reader.result as string; // Hetha string mta3 image en base 64, ma3neha tzid attribue esmou 'image' type mte3ou string w mba3ed fi wost java tconverti el string eli howa base 64 lil image
        console.log(uploadedImage)
    };
}
}
