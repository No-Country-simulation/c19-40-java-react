package com.example.ProVision_ERP.Dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {

   @NotBlank(message = "The Email Is Required.")
   private String email;
   @NotBlank(message = "The Password Is Required.")
   private String password; 
}
