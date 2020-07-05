package com.autam.validation;

import java.util.ArrayList;
import java.util.List;

public class CustomMessageValidation {

    private String shortMessage;
    private String longMessage;
    private List<String> fieldsAffecteds = new ArrayList<>();
    private CustomMessageType messageType;

    public CustomMessageValidation() {

    }

    public CustomMessageValidation(String shortMessage, String longMessage, List<String> fieldsAffecteds) {
        this.shortMessage = shortMessage;
        this.longMessage = longMessage;
        this.fieldsAffecteds = fieldsAffecteds;
    }

    public CustomMessageValidation(String shortMessage, String longMessage) {
        this.shortMessage = shortMessage;
        this.longMessage = longMessage;
    }

    public CustomMessageValidation(String shortMessage) {
        this.shortMessage = shortMessage;
    }

    public CustomMessageValidation(String shortMessage, String longMessage, List<String> fieldsAffecteds,
            CustomMessageType messageType) {
        this.shortMessage = shortMessage;
        this.longMessage = longMessage;
        this.fieldsAffecteds = fieldsAffecteds;
        this.messageType = messageType;
    }

    public CustomMessageValidation(String shortMessage, CustomMessageType messageType) {
        this.shortMessage = shortMessage;
        this.messageType = messageType;
    }

    public CustomMessageValidation(String shortMessage, String longMessage, CustomMessageType messageType) {
        this.shortMessage = shortMessage;
        this.longMessage = longMessage;
        this.messageType = messageType;
    }

    public String getShortMessage() {
        return shortMessage;
    }

    public void setShortMessage(String shortMessage) {
        this.shortMessage = shortMessage;
    }

    public String getLongMessage() {
        return longMessage;
    }

    public void setLongMessage(String longMessage) {
        this.longMessage = longMessage;
    }

    public List<String> getFieldsAffecteds() {
        return fieldsAffecteds;
    }

    public void setFieldsAffecteds(List<String> fieldsAffecteds) {
        this.fieldsAffecteds = fieldsAffecteds;
    }

    public CustomMessageType getMessageType() {
        return messageType;
    }

    public void setMessageType(CustomMessageType messageType) {
        this.messageType = messageType;
    }
}