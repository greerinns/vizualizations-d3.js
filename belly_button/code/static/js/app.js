// first make a function to create the bar chart
function createDash(response){
    let subjectList = response.metadata;
    // pulling list of metadata from json
    let sampleList = response.samples;
    // pulling the list of samples from the json response

    // BAR CHART
    let sampleValues = sampleList.map(item => item.sample_values.slice(0,10));
    let otuIds = sampleList.map(item => item.otu_ids.slice(0,10));
    let otuLabels = sampleList.map(item => item.otu_labels.slice(0,10));
    // using map function to create lists of sample_values, otu_ids, and otu_labels
    // want the top 10 OTUs, they are already sorted by sample_value in the source json
    // therefore need slice the first ten of each item mapped
    // set up the bar chart to initialize on the data frome the first individual in the json
    let traceBar = {
        x: sampleValues[0].reverse(),
        y: otuIds[0].map(otu => `OTU ${otu}`).reverse(),
        // the otu_ids in json are in integer form, converted them to string
        type: 'bar',
        orientation: 'h',
        text: otuLabels[0].reverse()
        // reversed all lists due to plotly default sorting
    };
    let dataBar = [traceBar];

    let layoutBar = {
        title: 'Top 10 OTUs for this individual'
    };

    Plotly.newPlot("bar", dataBar, layoutBar);
    
    // horizontal bar chart initialized

    // BUBBLE CHART

    let traceBubble = {
        // setting up desired values
        x: sampleList.map(item => item.otu_ids)[0],
        y: sampleList.map(item => item.sample_values)[0],
        text: sampleList.map(item => item.otu_labels)[0],
        mode: 'markers',
        marker: {
            color: sampleList.map(item => item.otu_ids)[0],
            size: sampleList.map(item => item.sample_values)[0],
            sizeref: .1,
            sizemode: 'area'
        }
    };

    let dataBubble = [traceBubble];

    let layoutBubble = {
        title: 'OTUs for this individual'
    };

    Plotly.newPlot('bubble', dataBubble, layoutBubble);

    // Bubble chart initialized

    // METADATA

    // storing keys and values
    let metaKeys = Object.keys(subjectList[0]);
    let metaValues = Object.values(subjectList[0]);
    // looping through each key/value pair of the object, adding it as a string
    // adding a text break after each pair
    for (let i = 0; i<metaKeys.length; i++){
        let string = `${metaKeys[i]}: ${metaValues[i]}`
        d3.select("#sample-metadata").append("text").text(string)
        d3.select("#sample-metadata").append("html").html("<br>")
    }
    // metadata initialized

    // DROP DOWN

    // now adding drop down menu for all 153 test IDs
    let dropDown = d3.select("#selDataset")
    // adding an option for each test ID in the list of subjects
    for (let i = 0; i < subjectList.length; i++){
        dropDown.append("option")
        .text(Object.values(subjectList[i])[0])
        .attr("value", subjectList[i][0])
        // set the value and text for each id 
    }

    // ON CHANGE 

    d3.selectAll("#selDataset").on("change", function(response)
{
    let dropdown = d3.select("#selDataset")
    let choice = dropdown.property("value")
    // now we have the id selected saved as choice
    // need to find what element of the list that is
    for (let i = 0; i < subjectList.length; i++){
        if(subjectList[i].id == choice){
            desired_index = i
            // this is the index of both lists that corresponds with the id
        }
    }
})

}





// taking in the json data and running the createDash function

let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
// for running from a browser
let filepath = "/../../data/samples.json"
// for running from a dev server use filepath (no access to local files in browser)
d3.json(url).then(function(response){
    console.log(response);
    createDash(response);
    // checking on data
});