import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UuidService } from 'meepo-uuid';
import { StoreService } from 'meepo-store';
import { Location } from '@angular/common';
import { BmapInputComponent, BmapFooterComponent } from 'meepo-bmap';

import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
    selector: 'add-address',
    templateUrl: './add-address.html',
    styleUrls: ['./add-address.scss']
})
export class AddAddressComponent implements OnInit {
    height: string;
    @ViewChild('save') _saveRef: ElementRef;

    @ViewChild(BmapInputComponent) _input: BmapInputComponent;
    @ViewChild(BmapFooterComponent) _footer: BmapFooterComponent;

    address: any = {
        address: '',
        detail: '',
        point: {}
    };
    key: string = '';
    uid: string = '';
    pageTitle: string = '添加地址';
    constructor(
        public uuid: UuidService,
        public route: ActivatedRoute,
        public store: StoreService,
        public router: Router,
        public location: Location,
        public title: Title
    ) {
        this.route.queryParams.subscribe(res => {
            this.key = res.key;
            this.uid = res.uid;
            if (this.uid) {
                let items: any[] = this.store.get(this.key, []);
                items.map(r => {
                    if (r.uid === this.uid) {
                        this.address = r;
                    }
                });
            }
        });
    }
    ngOnInit() {
        this.title.setTitle(this.pageTitle);
    }
    setHeight(e: number) {
        this.height = 'calc( 100% - ' + (e + this._saveRef.nativeElement.clientHeight) + 'px)';
    }
    centerChange(e: any) {
        this.address.point = e;
    }
    doSave() {
        this.address.address = this._input.getKey();
        this.address.detail = this._footer.getDetail();
        let addressList: any[] = this.store.get(this.key, []);
        if (this.address.uid) {
            addressList.map((add, index) => {
                if (add.uid === this.address.uid) {
                    addressList[index] = this.address;
                    this.store.set(this.key, addressList);
                }
            });
        } else {
            this.address.uid = this.uuid.v1();
            addressList = [this.address, ...addressList];
            this.store.set(this.key, addressList);
        }
        this.router.navigate(['/address/index']);
    }
}