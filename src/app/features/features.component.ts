import { Component, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { Subscription } from 'rxjs';
import { menu, translateMenuItems } from './ui/model/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { TranslateService } from '@ngx-translate/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnDestroy {

    opened: boolean = true;
    mediaWatcher: Subscription;
    currentUser: User;
    mymennu = menu;
    mainmenu: any[] = [];
    // translatedMenu: any[];

    constructor(
        private media: MediaObserver,
        private router: Router,
        private translate: TranslateService,
        private _activatedRoute: ActivatedRoute,
        private loader: NgxUiLoaderService) {
        this.mediaWatcher = this.media.media$.subscribe((mediaChange: MediaChange) => {
            this.handleMediaChange(mediaChange);
        })
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
        this.checkUser(this.currentUser.tabName)
    }

    ngOnInit(): void {
        // this.mainmenu = translateMenuItems(menu,this.translate);
    }

    private handleMediaChange(mediaChange: MediaChange) {
        if (this.media.isActive('lt-md')) {
            this.opened = false;
        } else {
            this.opened = true;
        }
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate(['/'])
    }

    ngOnDestroy() {
        this.mediaWatcher.unsubscribe();
    }

    selectedTab(event) {
        this.loader.start()
        var link = event
        setTimeout(() => {
            if (link == 'Procurement') {
                this.router.navigateByUrl('/procurement/home')
            } else if (link == 'Inventory') {
                this.router.navigateByUrl('/inventory/company')
            } else {
                this.router.navigateByUrl('/sale/auction')
            }
        }, 1000);
    }

    redirectTosale() {
        this.router.navigateByUrl('/sale/auction')
    }

    checkUser(tabs) {
        if (this.currentUser.isUser == 'Admin') {
            this.mainmenu = menu
            // if(this.currentUser.isUser == 'portfolio'){
            //     var indexportfolio = this.mainmenu.findIndex(x => x.route == 'procurement/fpc-branch')
            //     this.mainmenu.splice(indexportfolio, 1);
            // }
        } else {
            var parameterValue = this._activatedRoute.snapshot['_routerState'].url;
            var test = parameterValue.replace('/home', '');
            const test2 = parameterValue.replace('/procurement', '');
            var url = test.replace('/', '')
            url = test2.replace('/', '')
            var allwedUrl = this.currentUser.tabName.find(x => x.toLowerCase() == url);
            if (allwedUrl == undefined) {
                this.router.navigate(['/login'])
                return
            }
            this.mymennu.forEach((element, index) => {
                element.isActive = 0
                // if (this.currentUser.isUser == 'portfolio') {
                //     if (element.route == 'procurement/fpc-branch') {
                //         this.mymennu.splice(index, 1);
                //     }
                // }
                if (element.children) {
                    element.children.forEach((element2, index) => {
                        element2.isActive = 0
                        // if (this.currentUser.aggregatorType == 'FPC') {
                        //     if (element2.route == 'procurement/report/fpcbranch') {
                        //         element.children.splice(index, 1);
                        //     }
                        // }
                        if (this.currentUser.aggregatorType == 'PACS') {
                            if (element2.route == 'procurement/report/fpcbranch') {
                                element.children.splice(index, 1);
                            }
                        }
                        // if (this.currentUser.aggregatorType !== 'NCC') {
                        //     if (element2.route == 'procurement/report/procurementstatus') {
                        //         element.children.splice(index, 1);
                        //     }
                        // }
                    });
                }
            });


            for (let i = 0; this.mymennu.length > i; i++) {
                for (let j = 0; tabs.length > j; j++) {
                    if (this.mymennu[i].route.replace('procurement/', '') == tabs[j]) {
                        this.mymennu[i].isActive = 1
                        this.mainmenu.push(this.mymennu[i])
                    }
                }
            }

        }
    }

    //
    isPopupOpen: boolean = false;
    allLanguages: any;
    language: string;


    openPopup() {
        this.isPopupOpen = true;
    }

    closePopup() {
        this.isPopupOpen = false;
    }

}
