import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'shortTxt'
})
export class shortTxt implements PipeTransform{
    transform(value: any,limit:any) {
        if(value?.length>limit){
            return value.substr(0,limit)+'...';
        }else{
            return value;
        }
    }

}