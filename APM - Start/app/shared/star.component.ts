import {Component, OnChanges, Input} from "@angular/core";
@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    divWidthPx: number = 86;

    ngOnChanges(): void {
        console.log("############# NG ON CHANGES FOR START COMPONENT ###############");
        this.starWidth = this.rating * this.divWidthPx / 5;
    }
}