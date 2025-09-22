import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSeparatedList',
  standalone: true
})
export class PipeSeparatedListPipe implements PipeTransform {
  transform(elements: string[] | undefined): string {
    if (!elements?.length) return '';
    return elements.join(' | ');
  }
}
