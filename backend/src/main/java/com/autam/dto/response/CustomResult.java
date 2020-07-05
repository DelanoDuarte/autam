package com.autam.dto.response;

import java.util.ArrayList;
import java.util.List;

import com.autam.validation.CustomMessageType;
import com.autam.validation.CustomMessageValidation;

public class CustomResult {

    private List<CustomMessageValidation> messages = new ArrayList<>();

    public List<CustomMessageValidation> getMessages() {
        return messages;
    }

    public void setMessages(List<CustomMessageValidation> messages) {
        this.messages = messages;
    }

    public boolean hasAnyError() {
        return !this.messages.isEmpty() && this.messages.stream().filter(message -> message.getMessageType() != null)
                .anyMatch(m -> m.getMessageType().equals(CustomMessageType.ERROR));
    }

    public boolean hasAnyWarning() {
        return !this.messages.isEmpty() && this.messages.stream().filter(message -> message.getMessageType() != null)
                .anyMatch(m -> m.getMessageType().equals(CustomMessageType.WARNING));
    }

    public boolean hasAnyInfo() {
        return !this.messages.isEmpty() && this.messages.stream().filter(message -> message.getMessageType() != null)
                .anyMatch(m -> m.getMessageType().equals(CustomMessageType.INFO));
    }

}