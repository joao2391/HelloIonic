import{FormControl} from '@angular/forms';

export class HelloIonicValidadores{

    public static email(fc: FormControl): any{

        let emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=^_`{|}~-]+@[a-zA-Z0-9]+[?:\.[a-zA-Z0-9]+]*$/;
        
        return emailRegex.test(fc.value) ? null : {
            "Email Invalido":true};
    }
}