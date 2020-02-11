import { Pipe, PipeTransform } from '@angular/core';
import {product} from './product';
@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(values: product[], filterText: string): product[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;
    return filterText?values.filter((p:product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):values;
  }

}
