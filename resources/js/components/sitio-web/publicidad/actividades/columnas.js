export default [
    {
        name: "titulo",
        sortField: "titulo",
        title: "Titulo",
        titleClass: "text-center"
    },
    {
        name: "lugar",
        sortField: "lugar",
        title: "Lugar",
        titleClass: "text-center"
    },
    ,
    {
        name: "fecha",
        sortField: "fecha",
        title: "Fecha",
        titleClass: "text-center",
        dataClass: "text-center",
        callback: "formatDate"
    },
    {
        name: "__component:checkboxs_actividades",
        title: "Publicar",
        titleClass: "text-center",
        dataClass: "text-center",
        sortField: "publicar"
    },
    {
        name: "__component:acciones_actividades",
        title: "Acciones",
        titleClass: "text-center",
        dataClass: "text-center"
    }
];
