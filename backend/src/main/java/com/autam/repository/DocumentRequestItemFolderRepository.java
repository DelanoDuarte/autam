package com.autam.repository;

import com.autam.domain.DocumentRequestItemFolder;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRequestItemFolderRepository extends JpaRepository<DocumentRequestItemFolder, Long> {

}