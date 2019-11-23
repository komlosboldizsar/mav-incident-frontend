import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from "@angular/common";

@Pipe({name: 'DateFormatter'})
export class DateFormatter implements PipeTransform {
  transform(d: string): string {
    console.log(formatDate(d, 'yyyy.MM.dd hh:mm', 'en-US'));
    return formatDate(d, 'yyyy.MM.dd hh:mm', 'en-US', '+0430');
  }
}
