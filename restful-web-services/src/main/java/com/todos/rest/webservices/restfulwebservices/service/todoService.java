package com.todos.rest.webservices.restfulwebservices.service;

import com.todos.rest.webservices.restfulwebservices.model.todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class todoService {

    private static List<todo> todos = new ArrayList();
    private static int idCounter = 0;

    static {
        todos.add(new todo(idCounter++, "asd", false, new Date(), "username"));
        todos.add(new todo(idCounter++, "asd2", false, new Date(), "username"));
        todos.add(new todo(idCounter++, "asd3", false, new Date(), "username"));

    }

    public List<todo> FindAll() {
        return todos;
    }

    public todo deleteTodo(long id) {
        todo todo = findById(id);

        if (todo == null) return null;

        if (todos.remove(todo)) {
            return todo;
        }

        return null;
    }

    private todo findById(long id) {
        for (todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }

        return null;
    }
}
