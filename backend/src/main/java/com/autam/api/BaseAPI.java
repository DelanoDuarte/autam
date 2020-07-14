package com.autam.api;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class BaseAPI<T, ID> implements IBaseApi<T, ID> {

    private JpaRepository repository;

    public BaseAPI(final JpaRepository repository) {
        this.repository = repository;
    }

    @Override
    @SuppressWarnings("unchecked")
    public ResponseEntity<T> create(T t) {
        Optional<T> createdT = (Optional<T>) Optional.of(repository.save(t));
        if (createdT.isPresent())
            return ResponseEntity.ok(createdT.get());
        else
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @Override
    @SuppressWarnings("unchecked")
    public ResponseEntity<List<T>> findAll() {

        try {
            Optional<List<T>> ts = Optional.of(repository.findAll());

            if (ts.isPresent())
                return ResponseEntity.ok(ts.get());
            else
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            log.error("Error on retrieve all on controller from class: " + this.getClass().getSimpleName() + ". Error: "
                    + e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @Override
    @SuppressWarnings("unchecked")
    public ResponseEntity<T> findOneById(ID id) {
        try {
            Optional<T> t = repository.findById(id);
            if (t.isPresent())
                return ResponseEntity.ok(t.get());
            else
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            log.error("Error on find one by id on controller from class: " + this.getClass().getSimpleName()
                    + ". Error: " + e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @Override
    public ResponseEntity<?> deleteById(ID id) {
        try {
            repository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (Exception e) {
            log.error("Error on delete by id on controller from class: " + this.getClass().getSimpleName() + ". Error: "
                    + e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @Override
    public ResponseEntity<Page<T>> findAllPaginated(Integer page, Integer size) {
        try {
            Optional<Page<T>> tsFiltered = Optional.of(repository.findAll(PageRequest.of(page, size)));
            if (tsFiltered.isPresent())
                return ResponseEntity.ok(tsFiltered.get());
            else
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            log.error("Error on find all paginated on controller from class: " + this.getClass().getSimpleName()
                    + ". Error: " + e.getMessage());
        }
        return null;
    }
}