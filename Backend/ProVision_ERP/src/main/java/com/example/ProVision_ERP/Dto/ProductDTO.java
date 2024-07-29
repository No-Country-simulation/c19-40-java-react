package com.example.ProVision_ERP.Dto;

import java.math.BigDecimal;
import java.math.BigInteger;

import com.example.ProVision_ERP.Model.Category;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ProductDTO {

    @NotBlank(message = "The Name is required.")
    private String name;
    @NotBlank(message = "The Description is required.")
    private String description;
    @NotBlank(message = "The Price is required.")
    private BigDecimal price;
    @NotBlank(message = "The Quantity is required.")
    private BigInteger quantity;
    @NotBlank(message = "The Discount is required.")
    private BigInteger discount;
    @NotBlank(message = "The Category is required.")
    private Category category;
}
