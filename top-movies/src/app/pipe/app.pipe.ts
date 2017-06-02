import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'filter',
    pure:false
})

export class FilterPipe implements PipeTransform{
    transform(data:any,term:any):any{
        if(!term){
            return data;
       }else {
            return data.filter((movies:any) => movies.title.toLowerCase().indexOf(term) != -1)
       }
        
    }
}