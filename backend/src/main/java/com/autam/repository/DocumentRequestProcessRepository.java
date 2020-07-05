package com.autam.repository;

import com.autam.domain.DocumentRequestProcess;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRequestProcessRepository extends JpaRepository<DocumentRequestProcess, Long>{
    
}