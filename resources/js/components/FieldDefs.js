export default [
    { name: "id", sortField: "id" },
    { name: "name", sortField: "name" },
    { name: "email", sortField: "email" },
    {
        name: "age",
        sortField: "birthdate",
        dataClass: "center aligned"
    },
    {
        name: "birthdate",
        sortField: "birthdate",
        titleClass: "text-center",
        dataClass: "text-center",
        callback: "formatDate|DD-MM-YYYY"
    },
    {
        name: "nickname",
        sortField: "nickname",
        callback: "allcap"
    },
    {
        name: "gender",
        sortField: "gender",
        titleClass: "text-center",
        dataClass: "text-center",
        callback: "genderLabel"
    },
    {
        name: "salary",
        sortField: "salary",
        titleClass: "text-center",
        dataClass: "text-right",
        callback: "formatNumber"
    },
    {
        name: "__component:custom-actions", // <----
        title: "Actions",
        titleClass: "center aligned",
        dataClass: "center aligned"
    }
];
