# belly-button-challenge

## Project Summary: Interactive Web Visualizations with D3.js

### Introduction
The goal of this project was to create an interactive web visualization using the D3 library. The visualization is based on a dataset provided in the samples.json file, which was loaded from the URL: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

The project involved several steps to create different visualizations and display sample metadata:

Reading and Loading Data: The D3 library was used to read the samples.json file from the provided URL.

### Part 1
Horizontal Bar Chart: A horizontal bar chart was created to display the top 10 Operational Taxonomic Units (OTUs) found in an individual. The dropdown menu allows the user to select different individuals. The sample_values were used as the values for the bar chart, otu_ids as the labels, and otu_labels as the hovertext.

### Part 2
Bubble Chart: A bubble chart was created to display each sample. The otu_ids were used for the x-axis values, sample_values for the y-axis values, sample_values for the marker size, otu_ids for the marker colors, and otu_labels for the text values.

### Part 3
Sample Metadata Display: The project also involved displaying the sample metadata, which includes demographic information about an individual available through the API. Each key-value pair from the metadata JSON object was displayed in a panel table on the page.

### Part 4
Dynamic Updates: All the plots were set up to update automatically when a new sample is selected from the dropdown menu. This ensures that the visualizations reflect the data for the selected individual.

### Conclusion:
Overall, the project provided an opportunity to practice working with D3.js, loading data from an external source, creating interactive visualizations, and designing a dashboard layout. The resulting web visualization allows users to explore and analyze the provided dataset in an engaging and informative manner.