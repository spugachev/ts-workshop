import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    name: string;
    age: number;
    email: string;
    address: {
        country: string,
        city: string,
        street: string
    };
    hobbies: string[];
    isEditing: boolean = false;

    constructor(private _dataService: DataService) {

    }

    ngOnInit(): void {
        this.name = 'Sergey Pugachev';
        this.age = 30;
        this.email = 'spugachev@gmail.com';
        this.address = {
            country: 'Russia',
            city: 'Moscow',
            street: 'Balchug'
        };

        //this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
        this._dataService.getHobbies().subscribe((hobbies) => {
            this.hobbies = hobbies;
        });
    }

    onClick() {
        this.age++;
    }

    addHobby(hobby: string) {
        this.hobbies.push(hobby);
        return false;
    }

    deleteHobby(hobby: string) {
        this.hobbies = this.hobbies.filter(c => c !== hobby);
    }

    toggleEdit() {
        this.isEditing = !this.isEditing;
    }
}
