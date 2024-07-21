package com.example.ProVision_ERP.Dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CategoryDTO {
    private String name;
    private String description;
}
