package com.example.ProVision_ERP.Dto;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class  CustomErrorResponse {
    private String message;
    private Map<String, String> errors;
}