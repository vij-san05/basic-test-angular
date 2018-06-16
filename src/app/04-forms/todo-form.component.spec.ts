import { TodoFormComponent } from './todo-form.component'; 

import { FormBuilder } from '@angular/forms';


describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create form with two controls', () => {
    expect(component.form.contains('name')).toBe(true);
    expect(component.form.contains('email')).toBe(true);
  });

  it('should make the name control required', () => {

    let value = component.form.get('name');
    value.setValue('');

    expect(value.valid).toBeFalsy();
  });
});