import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from './../../../../services/training.service';
import { Training } from 'src/app/Model/training';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.css']
})
export class UpdateTrainingComponent implements OnInit {
  form:FormGroup;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  imgURL: any;

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
    urllink:String = "assets/images/";
  id:number;
  training:Training = new Training();
  constructor(private fb:FormBuilder,private trainingService: TrainingService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.trainingService.getTrainingById(this.id).subscribe(training => {this.training = training;
    }, error=> console.log(error));  
    this.update();
  }

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    const file = event.target.files[0];
    this.urllink = file;
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
    this.trainingService.createData(formData).subscribe( data => {
    
      this.router.navigate(['/training']); 
    });
  }
  onChange(e){
    this.training.domain=e;

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


  onSubmit(){
    this.trainingService.updateTraining(this.training).subscribe(training =>{
      this.goToList()
    }, error=> console.log(error));  
    console.log("this.training");
   
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

  update() {
    this.form.setValue({
      subject: this.training.subject,
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
    });

    
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


  goToList(){
    this.router.navigate(['/training']);
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
  

}