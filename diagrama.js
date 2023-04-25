// Definir los datos para los conjuntos
var sets = [
 {label: "Conjunto A", size: 10},
 {label: "Conjunto B", size: 10},
 {label: "Conjunto C", size: 10}
];

// Definir la configuración para el diagrama de Venn
var config = 
{
 sets: sets,
 size: 200,
 padding: 0.1,
 strokeWidth: 2,
 fillOpacity: 0.5,
 strokeOpacity: 1
};

// Crear el contenedor SVG para el diagrama de Venn
var svg = d3.select("#venn-container")
 .append("svg")
 .attr("width", 400)
 .attr("height", 400);

// Crear el diagrama de Venn
var diagram = venn.VennDiagram()
 .width(config.size)
 .height(config.size)
 .padding(config.padding)
 .strokeWidth(config.strokeWidth)
 .fillOpacity(config.fillOpacity)
 .strokeOpacity(config.strokeOpacity);

// Añadir los conjuntos al diagrama de Venn
svg.datum(sets).call(diagram);

// Añadir las etiquetas a los conjuntos
svg.selectAll(".venn-label")
 .style("font-size", "16px")
 .style("font-weight", "bold");


   
