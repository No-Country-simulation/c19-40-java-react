package com.example.ProVision_ERP.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProVision_ERP.Model.Purchase;
import com.example.ProVision_ERP.Services.PurchaseService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RestController
@RequestMapping("/purchase")
@SecurityRequirement(name = "bearer-key")
public class PurchaseController {
    
    @Autowired
    private PurchaseService purchaseService;

    @GetMapping("/")
    public ResponseEntity<List<Purchase>> getAllPurchase() {
        List<Purchase>  purchases = purchaseService.listPurchase();

        return ResponseEntity.ok(purchases);
    }

    @PostMapping("/create")
    public ResponseEntity<Purchase> createpurchase (@RequestBody Purchase dto){
        Purchase purchase = purchaseService.createPurchase(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(purchase);
    }
}
