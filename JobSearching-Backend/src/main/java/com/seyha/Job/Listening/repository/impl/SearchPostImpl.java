package com.seyha.Job.Listening.repository.impl;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.seyha.Job.Listening.model.JobPost;
import com.seyha.Job.Listening.repository.JobSearch;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class SearchPostImpl implements JobSearch {
   @Autowired
   MongoClient mongoClient;

   @Autowired
    MongoConverter mongoConverter;



    @Override
    public List<JobPost> findByText(String text) {
        List<JobPost> posts = new ArrayList<>();
        MongoDatabase database = mongoClient.getDatabase("workonjob");
        MongoCollection<Document> collection = database.getCollection("JobPost");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                        new Document("text",
                                new Document("query", text)
                                        .append("path", Arrays.asList("techs", "des", "profile")))),
                new Document("$sort",
                        new Document("exp", 1L)),
                new Document("$limit", 5L)));

        result.forEach(document -> posts.add(mongoConverter.read(JobPost.class,document)));

        return posts;
    }
}
