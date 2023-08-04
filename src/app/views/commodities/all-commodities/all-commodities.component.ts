import { Component, OnInit, SimpleChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClient, HttpRequest } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { CommoditiesService } from '../commodities.service';

import { Router } from '@angular/router';

import { cilPencil, cilTrash, cilWatch, cilViewStream } from '@coreui/icons';

@Component({
  selector: 'app-all-commodities',
  templateUrl: './all-commodities.component.html',
  styleUrls: ['./all-commodities.component.scss']
})
export class AllCommoditiesComponent  implements OnInit {

  icons = { cilPencil, cilTrash, cilViewStream };
  data:any;
  imagePath = this.service.getImagePath();
  constructor(private service:CommoditiesService,private router: Router) {}
  ngOnInit() {
    this.service.getCommodities()
      .subscribe(response => {
        this.data = response;
        console.log(response);
      });
  }
  ngOnChanges(changes: SimpleChanges) {
    this.service.getCommodities()
      .subscribe(response => {
        this.data = response;
        console.log(response)
      });
      console.log("those are changes"+changes)
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['value']) {
  //     console.log('Value changed to:', changes['value'].currentValue);
  //   }
  // }
  onDelete(id:any){
    this.service.deleteCommodity(id)
      .subscribe(response => {
        this.data = response;
        console.log(response)
      });
  }
  onEdit(id:any){
    this.router.navigateByUrl('commodities/edit/'+id);
  }
  onView(id:any){
    this.router.navigateByUrl('commodities/detail/'+id);
  }
}

// data = [
    //   { 
    //     id: 1,  
    //     name: 'Coffee' ,
    //     description:  `
    //     This is the  item accordion body. It is hidden by
    //     default, until the collapse plugin adds the appropriate classes that we use to
    //     style each element. These classes control the overall appearance, as well as
    //     the showing and hiding via CSS transitions. You can modify any of this with
    //     custom CSS or overriding our default variables. It&#39;s also worth noting
    //     that just about any HTML can go within the.accordion-body,
    //     though the transition does limit overflow.
    //   `,
    //   imagePath: '../../../../assets/image/29-mm-Cotton.jpg'
    //   },
    //   { 
    //     id: 2,  
    //     name: 'Sesame' ,
    //     description:  `
    //     This is the  item accordion body. It is hidden by
    //     default, until the collapse plugin adds the appropriate classes that we use to
    //     style each element. These classes control the overall appearance, as well as
    //     the showing and hiding via CSS transitions. You can modify any of this with
    //     custom CSS or overriding our default variables. It&#39;s also worth noting
    //     that just about any HTML can go within the.accordion-body,
    //     though the transition does limit overflow.
    //   `,
    //     imagePath: '../../../../assets/image/1585198086.jpg'
    //   },
    //   { 
    //     id: 3,  
    //     name: 'Red Kidney Bean' ,
    //     description:  `
    //     This is the  item accordion body. It is hidden by
    //     default, until the collapse plugin adds the appropriate classes that we use to
    //     style each element. These classes control the overall appearance, as well as
    //     the showing and hiding via CSS transitions. You can modify any of this with
    //     custom CSS or overriding our default variables. It&#39;s also worth noting
    //     that just about any HTML can go within the.accordion-body,
    //     though the transition does limit overflow.
    //   `,
    //     imagePath: '../../../../assets/image/1607702544.png'
    //   },
    //   { 
    //     id: 4,  
    //     name: 'White Pea Bean' ,
    //     description:  `
    //     This is the  item accordion body. It is hidden by
    //     default, until the collapse plugin adds the appropriate classes that we use to
    //     style each element. These classes control the overall appearance, as well as
    //     the showing and hiding via CSS transitions. You can modify any of this with
    //     custom CSS or overriding our default variables. It&#39;s also worth noting
    //     that just about any HTML can go within the.accordion-body,
    //     though the transition does limit overflow.
    //   `,
    //     imagePath: '../../../../assets/image/Bajra.jpg'
    //   },
    //   { 
    //     id: 5,  
    //     name: 'Chick Peas' ,
    //     description:  `
    //     This is the  item accordion body. It is hidden by
    //     default, until the collapse plugin adds the appropriate classes that we use to
    //     style each element. These classes control the overall appearance, as well as
    //     the showing and hiding via CSS transitions. You can modify any of this with
    //     custom CSS or overriding our default variables. It&#39;s also worth noting
    //     that just about any HTML can go within the.accordion-body,
    //     though the transition does limit overflow.
    //   `,
    //     imagePath: '../../../../assets/image/29-mm-Cotton.jpg'
    //   },
    //   { 
    //     id: 6,  
    //     name: 'Soya Beans' ,
    //     description:  `
    //     This is the  item accordion body. It is hidden by
    //     default, until the collapse plugin adds the appropriate classes that we use to
    //     style each element. These classes control the overall appearance, as well as
    //     the showing and hiding via CSS transitions. You can modify any of this with
    //     custom CSS or overriding our default variables. It&#39;s also worth noting
    //     that just about any HTML can go within the.accordion-body,
    //     though the transition does limit overflow.
    //   `,
    //     imagePath: '../../../../assets/image/1585198086.jpg'
    //   },
    //   { 
    //     id: 7,  
    //     name: 'Green Mung Bean' ,
    //     description:  `
    //     This is the  item accordion body. It is hidden by
    //     default, until the collapse plugin adds the appropriate classes that we use to
    //     style each element. These classes control the overall appearance, as well as
    //     the showing and hiding via CSS transitions. You can modify any of this with
    //     custom CSS or overriding our default variables. It&#39;s also worth noting
    //     that just about any HTML can go within the.accordion-body,
    //     though the transition does limit overflow.
    //   `,
    //     imagePath: '../../../../assets/image/1607702544.png'
    //   },
    //   { 
    //     id: 8,  
    //     name: 'Wheat' ,
    //     description:  `
    //     This is the  item accordion body. It is hidden by
    //     default, until the collapse plugin adds the appropriate classes that we use to
    //     style each element. These classes control the overall appearance, as well as
    //     the showing and hiding via CSS transitions. You can modify any of this with
    //     custom CSS or overriding our default variables. It&#39;s also worth noting
    //     that just about any HTML can go within the.accordion-body,
    //     though the transition does limit overflow.
    //   `,
    //     imagePath: '../../../../assets/image/Bajra.jpg'
    //   },
    //   { 
    //     id: 9,  
    //     name: 'Maize' ,
    //     description:  `
    //     This is the  item accordion body. It is hidden by
    //     default, until the collapse plugin adds the appropriate classes that we use to
    //     style each element. These classes control the overall appearance, as well as
    //     the showing and hiding via CSS transitions. You can modify any of this with
    //     custom CSS or overriding our default variables. It&#39;s also worth noting
    //     that just about any HTML can go within the.accordion-body,
    //     though the transition does limit overflow.
    //   `,
    //     imagePath: '../../../../assets/image/29-mm-Cotton.jpg'
    //   },
    //   { 
    //     id: 10,  
    //     name: 'Pinto Bean' ,
    //     description:  `
    //     This is the  item accordion body. It is hidden by
    //     default, until the collapse plugin adds the appropriate classes that we use to
    //     style each element. These classes control the overall appearance, as well as
    //     the showing and hiding via CSS transitions. You can modify any of this with
    //     custom CSS or overriding our default variables. It&#39;s also worth noting
    //     that just about any HTML can go within the.accordion-body,
    //     though the transition does limit overflow.
    //   `,
    //     imagePath: '../../../../assets/image/1585198086.jpg'
    //   },
    //   { 
    //     id: 11,  
    //     name: 'White Pigeon Pea',
    //     description:  `
    //     This is the  item accordion body. It is hidden by
    //     default, until the collapse plugin adds the appropriate classes that we use to
    //     style each element. These classes control the overall appearance, as well as
    //     the showing and hiding via CSS transitions. You can modify any of this with
    //     custom CSS or overriding our default variables. It&#39;s also worth noting
    //     that just about any HTML can go within the.accordion-body,
    //     though the transition does limit overflow.
    //   `,
    //     imagePath: '../../../../assets/image/Bajra.jpg' 
    //   }
    // ]