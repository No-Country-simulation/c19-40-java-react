package com.example.ProVision_ERP.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProVision_ERP.Model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
