import {Injectable} from "@angular/core"


@Injectable()
export class SharedService{

    private eventadded:any = null;
    private hide_addFab:any = null;
    private show_addFab:any = null;

    public setOnEventAdded(func){
        this.eventadded = func;
    }

    public emitEventCreated(){
        this.eventadded();
    }

    public setHideAddFab(func){
        this.hide_addFab = func;
    }

    public setshowAddFab(func){
        this.show_addFab = func;
    }

    public hideAddFab(){
        this.hide_addFab();
    }

    public showAddFab(){
        this.show_addFab();
    }
}