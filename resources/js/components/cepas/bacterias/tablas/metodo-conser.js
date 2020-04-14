export default [
    {
        name: "id",
        sortField: "id",
        title: "Id",
        titleClass: "text-center",
        dataClass: "text-center"
    },
    {
        name: "nombre_tipo_metodo",
        sortField: "tipo_id",
        title: "Tipo de Método",
        titleClass: "text-center",
        dataClass: "text-center"
    },
    {
        name: "nombre_tipo_agar",
        sortField: "tipo_agar_id",
        title: "Tipo Agar",
        titleClass: "text-center",
        dataClass: "text-center",
        callback: "tipoAgar"
    },
    {
        name: "numero_replicas",
        sortField: "numero_replicas",
        title: "Numero de Replicas",
        titleClass: "text-center",
        dataClass: "text-center"
    },
    {
        name: "recuento_microgota",
        sortField: "recuento_microgota",
        title: "Recuento Microgota",
        titleClass: "text-center"
    },
    {
        name: "fecha",
        sortField: "fecha",
        title: "Fecha",
        titleClass: "text-center",
        dataClass: "text-center"
    },
    {
        name: "__component:acciones_tabla_metodo_conser_bacteria",
        title: "Acciones",
        titleClass: "text-center",
        dataClass: "text-center"
    }
];
