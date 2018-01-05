import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MeepoHistory } from 'meepo-base';
import { StoreService } from 'meepo-store';
import { Router } from '@angular/router';
@Component({
    selector: 'address-index',
    templateUrl: './address-index.html',
    styleUrls: ['./address-index.scss']
})
export class AddressIndexComponent extends MeepoHistory {
    key: string = 'address.index';
    page: number = 1;
    psize: number = 10;
    max: number = 200;
    data: any[] = [];
    constructor(
        public store: StoreService,
        public cd: ChangeDetectorRef,
        public router: Router
    ) {
        super(store, cd);
    }

    meepoInit() {}

    add() {
        this.router.navigate(['/address/add'], { queryParams: { key: this.key } });
    }

    down(e: any) {
        e.next(false);
    }

    up(e: any) {
        this.page++;
        let items = this.store.getList(this.key, this.page, this.psize);
        if (items.length > 0) {
            this.data = [...this.data, ...items];
            e.next(true);
        } else {
            e.next(true);
        }
    }
}