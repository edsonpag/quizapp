import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class ChangeService {

    changed: EventEmitter<any> = new EventEmitter()

    emit(value: any) {
        this.changed.emit(value)
    }
}