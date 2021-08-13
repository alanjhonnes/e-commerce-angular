import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TypeToForm } from './../../../../shared/types/type-to-form.type';
import { UserFieldsFragment } from './../../graphql/fragments/__generated__/user.fragment.graphql.generated';

export type UserFormShape = {
  name: string | null;
  email: string | null;
};

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnChanges {
  readonly userFormGroup: FormGroup;

  @Input()
  userId: UserFieldsFragment[] | null = null;

  constructor() {
    const formConfig: TypeToForm<UserFormShape> = {
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    };

    this.userFormGroup = new FormGroup(formConfig);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): any {
    if (changes.userId) {
      if (this.userId) {
        const result = Object.values(this.userId);

        this.setFormValue({
          name: result[1].toString(),
          email: result[2].toString(),
        });
      }
    }
  }

  getFormValue(): UserFormShape {
    return this.userFormGroup.value;
  }

  setFormValue(value: Partial<UserFormShape>) {
    this.userFormGroup.patchValue(value);
  }
}
