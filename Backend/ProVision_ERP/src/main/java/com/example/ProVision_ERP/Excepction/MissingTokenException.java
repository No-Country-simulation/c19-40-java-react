package com.example.ProVision_ERP.Excepction;

public class MissingTokenException extends RuntimeException {
    public MissingTokenException(String message){
        super(message);
    }
}
