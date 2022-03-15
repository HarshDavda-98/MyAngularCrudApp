import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@modules/auth/services';
@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    constructor(public userService: UserService, private router: Router) { }
    ngOnInit() { }
    LogOut() {
        if(sessionStorage.getItem('Auth')){
            window.confirm("Are you sure to logout....")
            sessionStorage.clear();
            this.router.navigate(['/dashboard'])
        }else{
            alert(' You are Already logged out....')
        }
    }
}
