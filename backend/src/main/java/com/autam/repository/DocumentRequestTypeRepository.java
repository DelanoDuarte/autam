package com.autam.repository;

import com.autam.domain.DocumentRequestType;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRequestTypeRepository extends JpaRepository<DocumentRequestType, Long> {

}