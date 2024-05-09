import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      if(searchText.includes("-") &&  !isNaN(parseFloat(searchText))){
        return ( JSON.stringify(item.t8).toLowerCase().includes(searchText))
      }
      if (!searchText.startsWith("09") &&!isNaN(parseFloat(searchText))) {  
        return (JSON.stringify(item.id).toLowerCase().startsWith(searchText) );
      }
      if(searchText.startsWith("09") && !isNaN(parseFloat(searchText))){
        return (JSON.stringify(item.t18).toLowerCase().includes(searchText))
      }
      return (JSON.stringify(item.t2).toLocaleLowerCase().includes(searchText) || JSON.stringify(item.t9).toLocaleLowerCase().includes(searchText)) 
     
    });
  }

}
