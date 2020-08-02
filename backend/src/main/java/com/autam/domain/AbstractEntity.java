package com.autam.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class AbstractEntity implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Column(name = "createdDate", nullable = false, updatable = false)
    @CreationTimestamp
    protected LocalDateTime createdDate;

    @Column(name = "updatedDate", nullable = false)
    @UpdateTimestamp
    protected LocalDateTime updatedDate;

}