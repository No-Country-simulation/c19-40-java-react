package com.example.ProVision_ERP.Services;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProVision_ERP.Model.Product;
import com.example.ProVision_ERP.Model.Purchase;
import com.example.ProVision_ERP.Model.PurchaseItem;
import com.example.ProVision_ERP.Repository.ProductRepository;
import com.example.ProVision_ERP.Repository.PurchaseItemRepository;
import com.example.ProVision_ERP.Repository.PurchaseRepository;

@Service
public class PurchaseService {
    
    @Autowired
    private PurchaseRepository purchaseRepository;

    @Autowired
    private PurchaseItemRepository purchaseItemRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<Purchase> listPurchase () {
        List<Purchase> purchase = new ArrayList<>();

        purchaseRepository.findAll().forEach(purchase::add);

        return purchase;
    }

    public Purchase PurchaseById (Long id) {
        return purchaseRepository.findById(id).orElse(null);
    }

    public Purchase createPurchase(Purchase purchase) {
        calculateTotalAmount(purchase);

        Purchase savedPurchase = purchaseRepository.save(purchase);

        proccesPurchaItem(savedPurchase, purchase.getItems());

        return savedPurchase;
    }


    private void calculateTotalAmount(Purchase purchase){
        BigDecimal totalAmount = BigDecimal.ZERO;
        for(PurchaseItem item: purchase.getItems()) {
            item.setUnitPrice(item.getProduct().getPrice());
            item.setTotalPrice(BigDecimal.valueOf(item.getQuantity()).multiply(item.getUnitPrice()));
            totalAmount = totalAmount.add(item.getTotalPrice());
        }
        purchase.setTotalAmount(totalAmount);
    }

    private void proccesPurchaItem(Purchase purchase, List<PurchaseItem> items) {
        for (PurchaseItem item : items) {
            item.setPurchase(purchase);
            item.setUnitPrice(item.getUnitPrice());
            item.setTotalPrice(BigDecimal.valueOf(item.getQuantity()).multiply(item.getUnitPrice()));

            Product product = item.getProduct();
            product.setQuantity(product.getQuantity().subtract(BigInteger.valueOf(item.getQuantity())));
            productRepository.save(product);

            purchaseItemRepository.save(item);
        }
    }




}
