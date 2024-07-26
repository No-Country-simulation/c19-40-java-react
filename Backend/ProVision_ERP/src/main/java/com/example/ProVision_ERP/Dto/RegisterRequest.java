package com.example.ProVision_ERP.Dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class RegisterRequest {

    private String PassWord;

    @NotNull(message = "The Name is required")
    private String name;

    @NotBlank(message = "The LastName is required")
    private String lastname;

    @NotBlank(message = "The Email is required")
    @Email(message = "The Email Is Invalid")
    private String email;

    @NotBlank(message = "The Telephone is required")
    private String telephone;

    @NotBlank(message = "The Rol is required")
    private String rol;
}
