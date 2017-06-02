import { Component,OnInit } from '@angular/core';
import {AppService} from './service/app.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
   providers:[AppService]
})
export class AppComponent implements OnInit {
    title:string="";
    private movie_id:string;
    private movie_rank:string;
    private movie_title:string;
    private newData:Post;
    private update_id:string;
    private update_rank:string;
    private update_title:string;
    private value:number;
    private update=false;
    private msg:any="";

	data:Post[];
    form:FormGroup;


    constructor(private service:AppService,private fb:FormBuilder){
        this.title="Movie Information";
    }
    ngOnInit(){
        this.service.getData().subscribe(post=>{
            this.data=post;
        });

        this.form=this.fb.group({
            id:['', [Validators.required,Validators.minLength(6)],this.isIndexUnique.bind(this)],
            rank:['', [Validators.required],this.isRankUnique.bind(this)],
            title:['', Validators.required]
        });
    }

    //Custom validator for ID ,ckeck if it is unique
    isIndexUnique(control:FormControl){
       return new Promise((resolve)=>{
          setTimeout(()=>{
              for(var i=0;i<this.data.length;i++){
                if(this.data[i].id==control.value){
                    resolve({indexNotUnique:true});
                }
              }
                
                resolve(null);
              
          },1000);
        })

    }
//Custom validator for Rank ,ckeck if it is unique
    isRankUnique(control:FormControl){
       return new Promise((resolve)=>{
          setTimeout(()=>{
              for(var i=0;i<this.data.length;i++){
                if(parseInt(this.data[i].rank)===control.value){
                    resolve({rankNotUnique:true});
                }
              }
                
                resolve(null);
              
          },1000);
       })
    }
//Add a movie info in the movie data
    addMovie(){
        this.newData={
            id:this.movie_id,
            rank:(this.movie_rank).toString(),
            title:this.movie_title
        }
        this.data.push(this.newData);
        this.msg="Record is successfully added";
        this.movie_id=this.movie_title=this.movie_rank="";
    }
//if it triggered then the updated area is displayed
     showUpdateArea(object1:any,object2:any){
        this.update=true;
        var index=object2.indexOf(object1);
        this.update_id = this.data[index].id;
        this.update_rank = this.data[index].rank;
        this.update_title = this.data[index].title;
        this.value=index;
    } 
//update movie info
    updateMovie(){
        this.data[this.value].id=this.update_id;
        this.data[this.value].rank=this.update_rank;
        this.data[this.value].title=this.update_title;
        this.update_id=this.update_rank=this.update_title='';
        this.msg="Record has been updated "
        this.update=false;
    }
 

    deleteMovie(object1:any,object2:any){
        var index=object2.indexOf(object1);
        this.data.splice(index,1);
        this.msg="Record has been deleted";
    }

    hide(){
        this.msg="";
    }
 }

 interface Post{
    id:string,
    rank:string,
    title:string
}
