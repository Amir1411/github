import { Component } from '@angular/core';
import { AppService } from '../../app.services';

@Component({
	selector: 'user-list',
	providers: [AppService],
	templateUrl: './userlist.component.html',
	styleUrls: ['./userlist.component.css']
})
export class UserListComponent {

	userList: any = [];
	showList: boolean = false;
	showPlaceholder: boolean = true;

	repositoryList: any = [];
	showDummyRepo: boolean = true;
	showRepositoryList: boolean = false;
	constructor(private _service: AppService) { 
	}
	ngOnInit() {
		this.getData();
	}

	getData() {
		this._service.getUserList().subscribe(
			data => {
				this.userList = data;
				this.showPlaceholder = false;
				this.showList = true;
			},
			error => {
			}
		);
	}
	searchUser(event) {
		console.log("ggg", event.target.value)
		this.userList = [];
		this.showPlaceholder = true;
		this.showList = false;
		if(event.target.value == "" || event.target.value == undefined) {
			this.getData();
			this.userList = [];
			this.showPlaceholder = false;
			this.showList = true;
		} else {
			this._service.searchUser(event.target.value).subscribe(
				data => {
					this.userList = data["items"];
					this.showPlaceholder = false;
					this.showList = true;
				},
				error => {
				}
			);
		}
	}

	getUserDetails(item) {
		this._service.getUserDeatils(item.repos_url).subscribe(
			data => {
				this.showDummyRepo = false;
				this.repositoryList = data;
				this.showRepositoryList = true;
			},
			error => {
			}
		);
	}
}
