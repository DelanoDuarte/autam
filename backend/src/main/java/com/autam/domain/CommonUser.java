package com.autam.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
@Table(name = "tb_common_user")
public class CommonUser extends User {

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    
}