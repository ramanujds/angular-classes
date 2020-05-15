import { AbstractControl } from "@angular/forms";

export function forbiddenTitleValidator(control:AbstractControl):{[key:string]:any}|null{
    const forbidden=/kill/.test(control.value);
    return forbidden?{'forbiddenTitle':{value:control.value}}:null;

}