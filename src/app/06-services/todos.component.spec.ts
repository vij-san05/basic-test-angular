import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service : TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todo property with Item that send from the server', () => {
    spyOn(service,'getTodos').and.callFake(()=>{
      return Observable.from([[1,2,3]]);
    });
    component.ngOnInit();
    expect(component.todos.length).toBe(3 );
  });

  it('should call the server to save the changes when a new todo item is added', ()=> {
    let spy = spyOn(service, 'add').and.callFake( t => {
      return Observable.empty()
    });
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should add the new retun todo retun from the server', ()=> {
    let todo = { id:1 };
    let spy = spyOn(service, 'add').and.callFake( t => {
      return Observable.from([todo]);
    });
    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property if it an error', ()=> {
    let error = 'error from the server'
    let spy = spyOn(service, 'add').and.callFake( t => {
      return Observable.throw(error);
    });
    component.add();
    expect(component.message).toBe(error);    
  });

  it('should call the server to delete method if the user conform', ()=> {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });
});