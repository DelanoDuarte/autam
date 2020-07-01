package com.autam.repository;

import com.autam.domain.DocumentRequest;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRequestRepository extends JpaRepository<DocumentRequest, Long>{
    
}