package com.example.ProVision_ERP.Excepction;

public class EmailAllReadyExistsException extends RuntimeException{
    public EmailAllReadyExistsException(String message) {
        super(message);
    }
}
