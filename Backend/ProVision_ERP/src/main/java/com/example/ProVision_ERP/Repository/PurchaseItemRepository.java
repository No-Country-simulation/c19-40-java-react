package com.example.ProVision_ERP.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ProVision_ERP.Model.PurchaseItem;

public interface PurchaseItemRepository extends JpaRepository<PurchaseItem, Long> {
    
}
