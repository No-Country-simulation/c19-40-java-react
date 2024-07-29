package com.example.ProVision_ERP.Validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class StrongPasswordValidator implements ConstraintValidator<StrongPassword, String> {
    @Override
    public boolean isValid(String password, ConstraintValidatorContext context) {
        if (password == null) {
            return false;
        }
        return password.length() >=  8 && 
        password.matches(".*[a-zA-Z].*") &&
        password.matches(".*\\d.*");
    }
}
