package com.example.ProVision_ERP.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProVision_ERP.Repository.PurchaseItemRepository;

@Service
public class PurchaseItemService {
    
    @Autowired
    private PurchaseItemRepository purchaseItemRepository;
}
