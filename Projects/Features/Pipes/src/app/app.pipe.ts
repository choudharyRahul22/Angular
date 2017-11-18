import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

    transform(value: any, limit: number, start: number) {

      if (value.length > limit) {
        return value.substring(start, limit) + ' ...';
      }
      return value;
    }

}
