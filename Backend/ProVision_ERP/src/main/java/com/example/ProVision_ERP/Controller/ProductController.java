package com.example.ProVision_ERP.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProVision_ERP.Dto.ProductDTO;
import com.example.ProVision_ERP.Model.Product;
import com.example.ProVision_ERP.Services.ProductService;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/product")
@SecurityRequirement(name = "bearer-key")
public class ProductController {
    
    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public ResponseEntity<List<Product>> getAllProduct() {
        
        List<Product> products = productService.listProduct();

        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> productById(@PathVariable Long id) {
        Product product = productService.findProductById(id);

        return ResponseEntity.ok(product);
    }

    @PostMapping("/create")
    public ResponseEntity<Product> createProduct (@RequestBody @Valid ProductDTO dto) {
            Product product = productService.createproducto(dto);
            return ResponseEntity.status(HttpStatus.CREATED).body(product); 
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody ProductDTO dto ) {
        Product product = productService.updateProduct(id, dto);
        return ResponseEntity.ok().body(product);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteProduct (@PathVariable Long id) {
        productService.deleteProduct(id);

        return ResponseEntity.noContent().build();
    }
}
