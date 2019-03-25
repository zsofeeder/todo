package com.todos.rest.webservices.restfulwebservices.model;

public class HelloWorldBean {

    private String name;

    public HelloWorldBean(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
