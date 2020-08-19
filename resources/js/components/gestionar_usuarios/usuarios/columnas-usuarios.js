export default [
    {
        name: "name",
        sortField: "name",
        title: "Nombre",
        titleClass: "text-center",
        dataClass: "text-center"
    },
    {
        name: "email",
        sortField: "email",
        title: "Email",
        titleClass: "text-center",
        dataClass: "text-center"
    },
    {
        name: "rol",
        sortField: "rol_id",
        title: "Rol de Usuario",
        titleClass: "text-center",
        dataClass: "text-center"
    },
    {
        name: "avatarPublico",
        title: "Imagen",
        titleClass: "text-center",
        dataClass: "text-center",
        callback: "imagen"
    },
    {
        name: "__component:acciones_tabla_usuarios",
        title: "Acciones",
        dataClass: "text-center",
        titleClass: "text-center"
    }
];
