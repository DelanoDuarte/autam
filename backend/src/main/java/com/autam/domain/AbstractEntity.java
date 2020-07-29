package com.autam.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AbstractEntity implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Column
    private LocalDateTime createdDate;

    @Column
    private LocalDateTime updatedDate;

    @PrePersist
    public void createdDateStore() {
        this.createdDate = LocalDateTime.now();
    }

    @PreUpdate
    public void updatedDateStore() {
        this.updatedDate = LocalDateTime.now();
    }
}