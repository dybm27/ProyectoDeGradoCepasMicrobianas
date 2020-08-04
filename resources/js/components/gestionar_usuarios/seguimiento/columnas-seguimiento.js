export default [
    {
        name: "nombre_responsable",
        sortField: "nombre_responsable",
        title: "Nombre Responsable",
        titleClass: "text-center",
        dataClass: "text-center"
    },
    {
        name: "email_responsable",
        sortField: "email_responsable",
        title: "Email Responsable",
        titleClass: "text-center",
        dataClass: "text-center"
    },
    {
        name: "rol",
        sortField: "rol",
        title: "Tipo de Usuario",
        titleClass: "text-center",
        dataClass: "text-center"
    },
    {
        name: "accion",
        sortField: "accion",
        title: "Acción",
        titleClass: "text-center",
        dataClass: "text-center"
    },
    {
        name: "created_at",
        sortField: "created_at",
        title: "Fecha",
        dataClass: "text-center",
        titleClass: "text-center",
        callback: "formatDate"
    }
];
