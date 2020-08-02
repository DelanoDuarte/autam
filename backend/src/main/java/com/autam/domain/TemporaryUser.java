package com.autam.domain;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "tb_temporary_user")
public class TemporaryUser extends User {

    @Column
    private LocalDateTime startDate;
    
    @Column
    private LocalDateTime endDate;
}