    angular.module('test', [])
      .controller('x', function() {
        
        this.todos = [
          {text:'learn AngularJS', done:true},
          {text:'build an AngularJS app', done:false}];
     
        this.addTodo = function() {
          this.todos.push({text:this.todoText, done:false});
          this.todoText = '';
        };
     
        this.remaining = function() {
          var count = 0;
          angular.forEach(this.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };
     
        this.archive = function() {
          var oldTodos = this.todos;
          this.todos = [];
          angular.forEach(oldTodos, function(todo) {
            if (!todo.done) this.todos.push(todo);
          });
        };
      });
