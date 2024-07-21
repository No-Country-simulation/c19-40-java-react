package com.example.ProVision_ERP.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProVision_ERP.Dto.CategoryDTO;
import com.example.ProVision_ERP.Model.Category;
import com.example.ProVision_ERP.Services.CategoryService;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@Slf4j

@RestController
@RequestMapping("/category")
@SecurityRequirement(name = "bearer-key")
public class CategoryController {
    
    @Autowired
    private CategoryService categoryService; 

    @GetMapping
    private ResponseEntity<List<Category>> finAllCategory () {
        List<Category> categori = categoryService.allCategory();
        return ResponseEntity.ok(categori);
    }

    @GetMapping("/{id}")
    private ResponseEntity<Category> findCategoryById(@PathVariable Long id) {

        Category category = categoryService.findCategoryById(id);
        if (category != null) {
            return ResponseEntity.ok(category);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/create")
    private ResponseEntity<Category> create (@RequestBody @Valid CategoryDTO dto) {
        log.info("Received DTO: {}", dto);
        Category category = categoryService.createCategory(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(category);
    }
}
