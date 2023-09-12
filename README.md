# interactive-web-vizualization

## Project Summary: Interactive Web Visualizations with D3.js

### Introduction

This project aimed to create an engaging and informative interactive web visualization using the D3.js library. The primary dataset for this visualization was sourced from the samples.json file, accessible via the URL: [Dataset Source](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).

The project encompassed various stages, each contributing to the creation of different visualizations and the display of sample metadata:

### Part 1: Horizontal Bar Chart

A horizontal bar chart was crafted to showcase the top 10 Operational Taxonomic Units (OTUs) discovered within an individual's sample. This dynamic chart allows users to select different individuals from a dropdown menu. Key data components include using sample_values for bar heights, otu_ids for labels, and otu_labels for hovertext.

### Part 2: Bubble Chart

A bubble chart was ingeniously designed to represent each individual sample. The chart employs otu_ids for the x-axis, sample_values for the y-axis, sample_values for marker sizes, otu_ids for marker colors, and otu_labels for text values. This visualization provides a holistic perspective of the dataset's composition.

### Part 3: Sample Metadata Display

The project also incorporated the display of sample metadata, offering demographic insights into each individual through an API. The metadata JSON object's key-value pairs were meticulously presented within a panel table on the web page. This feature enhances the user's understanding of the dataset.

### Part 4: Dynamic Updates

To ensure a seamless user experience, all visualizations were programmed to update automatically when a new sample is selected from the dropdown menu. This dynamic feature ensures that the visualizations consistently reflect the data corresponding to the chosen individual. The necessary functions were effectively invoked in the HTML file, and the D3 library facilitated the retrieval of data from the samples.json file via the provided URL.

### Conclusion

In conclusion, this project served as an excellent opportunity to hone skills in working with D3.js, loading external data sources, creating interactive and visually appealing charts, and designing an intuitive dashboard layout. The resulting web visualization offers users a captivating and informative means to explore and analyze the provided dataset, promoting a deeper understanding of the data's intricacies and significance.
