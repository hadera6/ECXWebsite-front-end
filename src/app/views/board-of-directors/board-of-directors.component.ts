import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-board-of-directors',
  templateUrl: 'board-of-directors.component.html',
  styleUrls: ['board-of-directors.component.scss']
})
export class BoardOfDirectorsComponent {

    data = [
      { 
        id: 1,  
        name: 'Director' ,
        description:  `
        This is the  item accordion body. It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It&#39;s also worth noting
        that just about any HTML can go within the.accordion-body,
        though the transition does limit overflow.
      `,
      imagePath: '../../../assets/image/avatar.png'
      },
      { 
        id: 2,  
        name: 'Director' ,
        description:  `
        This is the  item accordion body. It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It&#39;s also worth noting
        that just about any HTML can go within the.accordion-body,
        though the transition does limit overflow.
      `,
        imagePath: '../../../assets/image/avatar.png'
      },
      { 
        id: 3,  
        name: 'Director' ,
        description:  `
        This is the  item accordion body. It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It&#39;s also worth noting
        that just about any HTML can go within the.accordion-body,
        though the transition does limit overflow.
      `,
        imagePath: '../../../assets/image/avatar.png'
      },
      { 
        id: 4,  
        name: 'Director' ,
        description:  `
        This is the  item accordion body. It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It&#39;s also worth noting
        that just about any HTML can go within the.accordion-body,
        though the transition does limit overflow.
      `,
        imagePath: '../../../assets/image/avatar.png'
      },
      { 
        id: 5,  
        name: 'Director' ,
        description:  `
        This is the  item accordion body. It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It&#39;s also worth noting
        that just about any HTML can go within the.accordion-body,
        though the transition does limit overflow.
      `,
        imagePath: '../../../assets/image/avatar.png'
      },
      { 
        id: 6,  
        name: 'Director' ,
        description:  `
        This is the  item accordion body. It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It&#39;s also worth noting
        that just about any HTML can go within the.accordion-body,
        though the transition does limit overflow.
      `,
        imagePath: '../../../assets/image/avatar.png'
      },
      { 
        id: 7,  
        name: 'Director' ,
        description:  `
        This is the  item accordion body. It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It&#39;s also worth noting
        that just about any HTML can go within the.accordion-body,
        though the transition does limit overflow.
      `,
        imagePath: '../../../assets/image/avatar.png'
      },
      { 
        id: 8,  
        name: 'Director' ,
        description:  `
        This is the  item accordion body. It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It&#39;s also worth noting
        that just about any HTML can go within the.accordion-body,
        though the transition does limit overflow.
      `,
        imagePath: '../../../assets/image/avatar.png'
      },
      { 
        id: 9,  
        name: 'Director' ,
        description:  `
        This is the  item accordion body. It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It&#39;s also worth noting
        that just about any HTML can go within the.accordion-body,
        though the transition does limit overflow.
      `,
        imagePath: '../../../assets/image/avatar.png'
      },
      { 
        id: 10,  
        name: 'Director' ,
        description:  `
        This is the  item accordion body. It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It&#39;s also worth noting
        that just about any HTML can go within the.accordion-body,
        though the transition does limit overflow.
      `,
        imagePath: '../../../assets/image/avatar.png'
      },
      { 
        id: 11,  
        name: 'Director' ,
        description:  `
        This is the  item accordion body. It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It&#39;s also worth noting
        that just about any HTML can go within the.accordion-body,
        though the transition does limit overflow.
      `,
        imagePath: '../../../assets/image/avatar.png' 
      }
    ]
}