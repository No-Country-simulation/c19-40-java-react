package com.example.ProVision_ERP.Excepction;

import java.nio.file.AccessDeniedException;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.ProVision_ERP.Dto.CustomErrorResponse;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CustomErrorResponse> handleValidationExceptions(MethodArgumentNotValidException ex) {
        BindingResult bindingResult = ex.getBindingResult();
        FieldError fieldError = bindingResult.getFieldError();

        Map<String, String> errors = new HashMap<>();
        if (fieldError != null) {
            errors.put(fieldError.getField(), fieldError.getDefaultMessage());
        }

        CustomErrorResponse errorResponse = new CustomErrorResponse("Validation Failed", errors);
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<CustomErrorResponse> handleConstraintViolation(ConstraintViolationException ex) {
        Set<ConstraintViolation<?>> violations = ex.getConstraintViolations();
        Map<String, String> errors = new HashMap<>();

        for (ConstraintViolation<?> violation : violations) {
            String propertyPath = violation.getPropertyPath().toString();
            String message = violation.getMessage();
            errors.put(propertyPath, message);
        }

        CustomErrorResponse errorResponse = new CustomErrorResponse("Validation Failed", errors);
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({Exception.class, MissingTokenException.class, ExpiredJwtException.class})
    public ResponseEntity<CustomErrorResponse> handleSecurityException(Exception exception) {
        CustomErrorResponse errorResponse;
        HttpStatus status;
        
        Map<String, String> errors = new HashMap<>();

        if (exception instanceof MissingTokenException || exception instanceof ExpiredJwtException) {
            status = HttpStatus.UNAUTHORIZED;
            errors.put("Description", exception.getMessage());
            errorResponse = new CustomErrorResponse("Authentication Failed", errors);
        } else if (exception instanceof BadCredentialsException) {
            status = HttpStatus.UNAUTHORIZED;
            errors.put("Description", "The username or password is incorrect");
            errorResponse = new CustomErrorResponse("Authentication Failed", errors);
        } else if (exception instanceof AccountStatusException) {
            status = HttpStatus.FORBIDDEN;
            errors.put("Description", "The account is locked");
            errorResponse = new CustomErrorResponse("Account Locked", errors);
        } else if (exception instanceof AccessDeniedException) {
            status = HttpStatus.FORBIDDEN;
            errors.put("Description", "You are not authorized to access this resource");
            errorResponse = new CustomErrorResponse("Access Denied", errors);
        } else if (exception instanceof SignatureException) {
            status = HttpStatus.FORBIDDEN;
            errors.put("Description", "The JWT signature is invalid");
            errorResponse = new CustomErrorResponse("Invalid JWT", errors);
        } else {
            status = HttpStatus.INTERNAL_SERVER_ERROR;
            errors.put("Description", "Unknown internal server error.");
            errorResponse = new CustomErrorResponse("Internal Server Error", errors);
        }
        
        errors.put("message", exception.getMessage());
        return new ResponseEntity<>(errorResponse, status);
    }
}