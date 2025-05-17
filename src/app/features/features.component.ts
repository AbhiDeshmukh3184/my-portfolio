import { Component, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { Subscription } from 'rxjs';
import { menu } from './ui/model/menu';
import { ActivatedRoute, Router } from '@angular/router';
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
    mymennu = menu;
    mainmenu: any[] = [];
    // translatedMenu: any[];

    constructor(
        private media: MediaObserver,
        private router: Router,
        private _activatedRoute: ActivatedRoute,
        private loader: NgxUiLoaderService) {
        this.mediaWatcher = this.media.media$.subscribe((mediaChange: MediaChange) => {
            this.handleMediaChange(mediaChange);
        })
        this.mainmenu = menu
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
}
