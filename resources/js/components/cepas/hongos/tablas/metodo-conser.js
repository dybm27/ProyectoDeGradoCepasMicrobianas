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
        name: "numero_replicas",
        sortField: "numero_replicas",
        title: "Numero de Replicas",
        titleClass: "text-center",
        dataClass: "text-center",
        callback: "numeroReplicas"
    },
    {
        name: "recuento_microgota",
        sortField: "recuento_microgota",
        title: "Recuento Microgota",
        titleClass: "text-center",
        dataClass: "text-center",
        callback: "recuentoMicorgota"
    },
    {
        name: "medio_cultivo",
        sortField: "medio_cultivo",
        title: "Medio de Cultivo",
        titleClass: "text-center",
        dataClass: "text-center",
        callback: "medioCultivo"
    },
    {
        name: "numero_pases",
        sortField: "numero_pases",
        title: "Número de Pases",
        titleClass: "text-center",
        dataClass: "text-center",
        callback: "numeroPases"
    },
    {
        name: "fecha",
        sortField: "fecha",
        title: "Fecha",
        titleClass: "text-center",
        dataClass: "text-center",
        callback: "formatDate"
    },
    {
        name: "__component:acciones_tabla_metodo_conser_hongo",
        title: "Acciones",
        titleClass: "text-center",
        dataClass: "text-center"
    }
];
