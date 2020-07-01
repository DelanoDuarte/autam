package com.autam.repository;

import com.autam.domain.DocumentType;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentTypeRepository extends JpaRepository<DocumentType, Long>{
    
}