package com.example.ProVision_ERP.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProVision_ERP.Model.Purchase;
import com.example.ProVision_ERP.Repository.PurchaseRepository;

@Service
public class PurchaseService {
    
    @Autowired
    private PurchaseRepository purchaseRepository;

    public List<Purchase> listPurchase () {
        List<Purchase> purchase = new ArrayList<>();

        purchaseRepository.findAll().forEach(purchase::add);

        return purchase;
    }

    public Purchase PurchaseById (Long id) {
        return purchaseRepository.findById(id).orElse(null);
    }


}
