package com.todos.rest.webservices.restfulwebservices.helloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class controller {

    @GetMapping(path = "/todos")
    public HelloWorldBean helloWorldBeanControllerMain() {
        return new HelloWorldBean("Welcome");
      //  throw new RuntimeException("error");
    }
    @GetMapping(path = "/todos/{name}")
    public HelloWorldBean helloWorldBeanController(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello %s", name));
       // throw new RuntimeException("error");
    }
}
