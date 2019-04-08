package com.todos.rest.webservices.restfulwebservices.controller;

import com.todos.rest.webservices.restfulwebservices.model.todo;
import com.todos.rest.webservices.restfulwebservices.service.todoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class todoController {

    @Autowired
    private todoService service;

    @GetMapping(path = "/users/{username}/todos")
    public List<todo> getTodos(@PathVariable String username) {
        return service.FindAll();
    }

    @DeleteMapping(path= "/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id)
    {
        todo todo = service.deleteTodo(id);

        if (todo != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
