import { Component, Input, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { UserService } from './../../user.service';
import { UserFieldsFragment } from '../../graphql/fragments/__generated__/user.fragment.graphql.generated';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent implements OnInit {
  @Input()
  userAll: ReadonlyArray<UserFieldsFragment> = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  buttonDelete($event: any, item: any) {
    $event.preventDefault();
    if (confirm('Deseja remover o usuário "' + item.name + '"?')) {
      this.userService.deleteUser(item.id);
      this.userAll = this.userAll.filter(
        (user) => user.id !== item.id
      );
    }
  }
}
