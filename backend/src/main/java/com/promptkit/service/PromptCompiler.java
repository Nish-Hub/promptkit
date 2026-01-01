package com.promptkit.service;

import com.promptkit.model.PromptSpec;

public class PromptCompiler {

    public static String compile(PromptSpec spec) {
        StringBuilder sb = new StringBuilder();

        if (spec.getRole() != null) {
            sb.append("You are ").append(spec.getRole()).append(".\n\n");
        }

        sb.append("Task:\n").append(spec.getTask()).append("\n\n");

        if (spec.getContext() != null && !spec.getContext().isEmpty()) {
            sb.append("Context:\n").append(spec.getContext()).append("\n\n");
        }

        if (spec.getConstraints() != null && !spec.getConstraints().isEmpty()) {
            sb.append("Constraints:\n");
            for (String c : spec.getConstraints()) {
                sb.append("- ").append(c).append("\n");
            }
            sb.append("\n");
        }

        if (spec.getOutputFormat() != null && !spec.getOutputFormat().isEmpty()) {
            sb.append("Output format:\n");
            int i = 1;
            for (String f : spec.getOutputFormat()) {
                sb.append(i++).append(". ").append(f).append("\n");
            }
        }

        return sb.toString();
    }
}
