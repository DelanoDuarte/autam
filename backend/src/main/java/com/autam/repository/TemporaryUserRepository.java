package com.autam.repository;

import com.autam.domain.TemporaryUser;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TemporaryUserRepository extends JpaRepository<TemporaryUser, Long>{
    
}