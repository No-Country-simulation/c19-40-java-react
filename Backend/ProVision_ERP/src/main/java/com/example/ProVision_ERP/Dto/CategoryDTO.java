package com.example.ProVision_ERP.Dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CategoryDTO {

    @NotNull(message = "The Name is required")
    private String name;
    @NotNull(message = "The Description is required")
    private String description;
}
