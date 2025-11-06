import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SingleCategory } from './pages/single-category/single-category';
import { SinglePost } from './pages/single-post/single-post';
import { ContactUs } from './pages/contact-us/contact-us';
import { TermsAndCodition } from './pages/terms-and-codition/terms-and-codition';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "category",
        component: SingleCategory
    },
    {
        path: "post",
        component: SinglePost
    },
    {
        path: "contact-us",
        component: ContactUs
    },
    {
        path: "term-condition",
        component: TermsAndCodition
    }
];
