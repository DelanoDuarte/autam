package com.autam.api;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

public interface IBaseApi<T, ID> {

    @PostMapping
    public ResponseEntity<T> create(@RequestBody T t);

    @GetMapping
    public ResponseEntity<List<T>> findAll();

    @GetMapping("/{id}")
    public ResponseEntity<T> findOneById(@PathVariable("id") ID id);

    @DeleteMapping
    public ResponseEntity<?> deleteById(ID id);

    @GetMapping("/find")
    public ResponseEntity<Page<T>> findAllPaginated(@RequestParam("page") Integer page,
            @RequestParam("size") Integer size);

}