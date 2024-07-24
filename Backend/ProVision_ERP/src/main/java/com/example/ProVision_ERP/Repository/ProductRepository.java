package com.example.ProVision_ERP.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProVision_ERP.Model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
    
}
