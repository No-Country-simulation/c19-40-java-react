package com.example.ProVision_ERP.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProVision_ERP.Dto.ProductDTO;
import com.example.ProVision_ERP.Excepction.ProductNotFoundException;
import com.example.ProVision_ERP.Model.Product;
import com.example.ProVision_ERP.Repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> listProduct () {

        List<Product> products = new ArrayList<>();

        productRepository.findAll().forEach(products::add);

        return products;
    }

    public Product createproducto(ProductDTO dto) {

        Product product = new Product();

        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice());
        product.setQuantity(dto.getQuantity());
        product.setDiscount(dto.getDiscount());
        product.setCategory(dto.getCategory());

        return productRepository.save(product);
    }

    public Product findProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product updateProduct(Long id, ProductDTO dto) {
        Product product = productRepository.findById(id).orElseThrow(()-> new ProductNotFoundException(id));
        
        if (dto.getName() != null && dto.getName().isEmpty()) {
            product.setName(dto.getName());
        }
        if(dto.getDescription() != null && dto.getDescription().isEmpty()) {
            product.setDescription(dto.getDescription());
        }
        if(dto.getPrice() != null ) {
            product.setPrice(dto.getPrice());
        }
        if(dto.getQuantity() != null) {
            product.setQuantity(dto.getQuantity());
        }
        if(dto.getDiscount() != null ) {
            product.setDiscount(dto.getDiscount());
        }
        if(dto.getCategory() != null ) {
            product.setCategory(dto.getCategory());
        }

        return productRepository.save(product);
    }

    public void deleteProduct (Long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
        productRepository.delete(product);
    }

}
