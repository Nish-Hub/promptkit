package com.promptkit.service;

import com.promptkit.model.PromptSpec;
import org.springframework.stereotype.Service;

@Service
public class PromptService {

    public String compile(PromptSpec spec) {
        return PromptCompiler.compile(spec);
    }
}
