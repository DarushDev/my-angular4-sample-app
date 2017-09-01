import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {post} from 'selenium-webdriver/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

    this.name = 'John Doe';
    this.email = 'test@test.com';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = ['Write code', 'Watch Movies', 'Listen to music'];
    this.hello = 1;


    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  onClick() {
    this.name = 'Darush';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    this.hobbies.splice(this.hobbies.indexOf(hobby), 1);
  }

}

interface  Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
