import { Injectable, inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

class AdminPageGuard {

    constructor(private router: Router) { }

    canActivate(): boolean {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken === 'j5M2D6B&4%ZhS')
            return true
        this.router.navigate(['/'])
        return false;
    }
}

export const authenticationGuardAdminPage = (): CanActivateFn => {
    return (): boolean => {
        return inject(AdminPageGuard).canActivate();
    }
}