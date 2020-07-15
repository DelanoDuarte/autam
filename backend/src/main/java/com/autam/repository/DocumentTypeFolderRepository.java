package com.autam.repository;

import com.autam.domain.DocumentTypeFolder;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentTypeFolderRepository extends JpaRepository<DocumentTypeFolder, Long> {

}