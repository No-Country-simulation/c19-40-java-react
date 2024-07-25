package com.example.ProVision_ERP.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProVision_ERP.Model.Purchase;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
    
}
