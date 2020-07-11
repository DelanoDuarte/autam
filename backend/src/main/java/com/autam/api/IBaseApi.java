package com.autam.api;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface IBaseApi<T, ID> {

    @PostMapping
    public ResponseEntity<T> create(@RequestBody T t);

    @GetMapping
    public ResponseEntity<List<T>> findAll();

    @GetMapping("/{id}")
    public ResponseEntity<T> findOneById(@PathVariable("id") ID id);

    @DeleteMapping
    public ResponseEntity<?> deleteById(ID id);

}