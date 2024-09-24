package com.seyha.Job.Listening.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "JobPost")
@Setter
@Getter
public class JobPost {
    private String profile;
    private String des;
    private int exp;
    private String[] techs;

    @Override
    public String toString() {
        return "JobPost{" +
                "profile='" + profile + '\'' +
                ", des='" + des + '\'' +
                ", exp=" + exp +
                ", techs='" + techs + '\'' +
                '}';
    }
}
