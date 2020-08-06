export default [
    {
        name: "codigo",
        sortField: "codigo",
        title: "Código",
        titleClass: "text-center"
    },
    {
        name: "nombre_genero",
        sortField: "genero_id",
        title: "Género",
        titleClass: "text-center"
    },
    {
        name: "nombre_especie",
        sortField: "especie_id",
        title: "Especie",
        titleClass: "text-center"
    },
    { name: "estado", sortField: "estado", titleClass: "text-center" },
    { name: "origen", sortField: "origen", titleClass: "text-center" },
    ,
    {
        name: "__component:checkboxs_publicar_bacterias",
        title: "Publicar",
        titleClass: "text-center",
        dataClass: "text-center",
        sortField: "publicar"
    },
    {
        name: "__component:acciones_cepas_bacterias",
        title: "Acciones",
        titleClass: "text-center",
        dataClass: "text-center"
    }
];
