import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {
    title = 'My card title';

    imgUrl: string = 'https://image.shutterstock.com/image-illustration/small-yellow-compact-car-260nw-394558741.jpg'

    ngOnInit(): void {
        setTimeout(() => {
            this.imgUrl = 'https://www.block-chain24.com/sites/default/files/crypto/small-love-potion-slp-icon-250x250.svg'
        }, 3000);
    }

    changeTitle() { 
        this.title = 'title has been chenged'
    }

    inputHandler(event: any) { 
        this.title = event.target.value
    }
}