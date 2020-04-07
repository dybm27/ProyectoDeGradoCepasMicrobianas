import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/cepas",
        name: "cepas-todas",
        component: () =>
            import(
                /* webpackChunkName: "cepas-todas" */

                "../components/cepas/TableCepasComponent.vue"
            ),
    },
    {
        path: "/cepas/agregar",
        name: "cepa-agregar",
        component: () =>
            import(
                /* webpackChunkName: "cepa-agregar" */

                "../components/cepas/FormCepasComponent.vue"
            ),
    },
    {
        path: "/cepas/editar/:cepaId",
        name: "cepa-editar",
        component: () =>
            import(
                /* webpackChunkName: "cepa-editar" */

                "../components/cepas/FormCepasComponent.vue"
            ),
    },

    // ------------------------ CARACTERISTICAS BACTERIAS ------------------------------------------

    {
        path: "/cepas/bacteria/:cepaBacteriaId",
        name: "bacteria",
        component: () =>
            import(
                /* webpackChunkName: "bacteria" */

                "../components/cepas/AgregarEditarCaractComponent.vue"
            ),
        children: [
            {
                path: "caract-macro",
                name: "caract-macro-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-macro-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoCaractMacroComponent.vue"
                    ),
            },
            {
                path: "caract-micro",
                name: "caract-micro-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-micro-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoCaractMicroComponent.vue"
                    ),
            },
            {
                path: "caract-bioqui",
                name: "caract-bioqui-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-bioqui-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue"
                    ),
            },
            {
                path: "caract-fisio",
                name: "caract-fisio-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-fisio-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoCaractFisioComponent.vue"
                    ),
            },
            {
                path: "identi-molecu",
                name: "identi-molecu-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "identi-molecu-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue"
                    ),
            },
            {
                path: "metodo-conser",
                name: "",
                component: () =>
                    import(
                        /* webpackChunkName: "metodo-conser-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue"
                    ),
                children: [
                    {
                        path: "",
                        name: "metodo-conser-bacteria",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-bacteria-tabla" */

                                "../components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue"
                            ),
                    },
                    {
                        path: "agregar",
                        name: "metodo-conser-bacteria-agregar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-bacteria-agregar" */

                                "../components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue"
                            ),
                    },
                    {
                        path: "editar/:metodoConserBacteriaId",
                        name: "metodo-conser-bacteria-editar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-bacteria-editar" */

                                "../components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue"
                            ),
                    },
                ],
            },
        ],
    },

    // ---------------------- HONGOS ------------------------------------------------
    {
        path: "/cepas/hongo/:cepaHongoId",
        name: "hongo",
        component: () =>
            import(
                /* webpackChunkName: "hongo" */

                "../components/cepas/AgregarEditarCaractComponent.vue"
            ),
        children: [
            {
                path: "caract-macro",
                name: "caract-macro-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-macro-hongo" */

                        "../components/cepas/hongos/forms-caract/FormCaractMacroComponent.vue"
                    ),
            },
            {
                path: "caract-micro",
                name: "caract-micro-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-micro-hongo" */

                        "../components/cepas/hongos/forms-caract/FormCaractMicroComponent.vue"
                    ),
            },
            {
                path: "caract-bioqui",
                name: "caract-bioqui-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-bioqui-hongo" */

                        "../components/cepas/hongos/forms-caract/FormCaractBioquiComponent.vue"
                    ),
            },
            {
                path: "identi-molecu",
                name: "identi-molecu-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "identi-molecu-hongo" */

                        "../components/cepas/hongos/forms-caract/FormIdentiMolecuComponent.vue"
                    ),
            },
            {
                path: "metodo-conser",
                name: "metodo-conser-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "metodo-conser-hongo" */

                        "../components/cepas/hongos/forms-caract/FormMetodoConserComponent.vue"
                    ),
            },
        ],
    },

    // ---------------------- LEVADURAS ------------------------------------------------
    {
        path: "/cepas/levadura/:cepaLevaduraId",
        name: "levadura",
        component: () =>
            import(
                /* webpackChunkName: "levadura" */

                "../components/cepas/AgregarEditarCaractComponent.vue"
            ),
        children: [
            {
                path: "caract-macro",
                name: "caract-macro-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-macro-levadura" */

                        "../components/cepas/levaduras/forms-caract/FormCaractMacroComponent.vue"
                    ),
            },
            {
                path: "caract-micro",
                name: "caract-micro-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-micro-levadura" */

                        "../components/cepas/levaduras/forms-caract/FormCaractMicroComponent.vue"
                    ),
            },
            {
                path: "caract-bioqui",
                name: "caract-bioqui-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-bioqui-levadura" */

                        "../components/cepas/levaduras/forms-caract/FormCaractBioquiComponent.vue"
                    ),
            },
            {
                path: "identi-molecu",
                name: "identi-molecu-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "identi-molecu-levadura" */

                        "../components/cepas/levaduras/forms-caract/FormIdentiMolecuComponent.vue"
                    ),
            },
            {
                path: "metodo-conser",
                name: "metodo-conser-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "metodo-conser-levadura" */

                        "../components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue"
                    ),
            },
        ],
    },

    // ---------------------- ACTINOMICETOS ------------------------------------------------
    {
        path: "/cepas/actinomiceto/:cepaActinomicetoId",
        name: "actinomiceto",
        component: () =>
            import(
                /* webpackChunkName: "actinomiceto" */

                "../components/cepas/AgregarEditarCaractComponent.vue"
            ),
        children: [
            {
                path: "caract-macro",
                name: "caract-macro-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-macro-actinomiceto" */

                        "../components/cepas/actinomicetos/forms-caract/FormCaractMacroComponent.vue"
                    ),
            },
            {
                path: "caract-micro",
                name: "caract-micro-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-micro-actinomiceto" */

                        "../components/cepas/actinomicetos/forms-caract/FormCaractMicroComponent.vue"
                    ),
            },
            {
                path: "identi-bioqui",
                name: "identi-bioqui-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "identi-bioqui-actinomiceto" */

                        "../components/cepas/actinomicetos/forms-caract/FormIdentiBioquiComponent.vue"
                    ),
            },
            {
                path: "caract-molecu",
                name: "caract-molecu-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-molecu-actinomiceto" */

                        "../components/cepas/actinomicetos/forms-caract/FormCaractMolecuComponent.vue"
                    ),
            },
            {
                path: "metodo-conser",
                name: "metodo-conser-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "metodo-conser-actinomiceto" */

                        "../components/cepas/actinomicetos/forms-caract/FormMetodoConserComponent.vue"
                    ),
            },
            {
                path: "otras-caract",
                name: "otras-caract-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "otras-caract-actinomiceto" */

                        "../components/cepas/actinomicetos/forms-caract/FormOtrasCaractComponent.vue"
                    ),
            },
        ],
    },

    // ----------------------------------------------------------------------------------------------
    {
        path: "/cepas-bacterias",
        name: "cepas-bacterias",
        component: () =>
            import(
                /* webpackChunkName: "cepas-bacterias" */ "../components/cepas/TableBacteriasComponent.vue"
            ),
    },
    {
        path: "/cepas-bacterias/form-agregar",
        name: "form-agregar-bacterias",
        component: () =>
            import(
                /* webpackChunkName: "form-agregar" */ "../components/cepas/FormCepasComponent.vue"
            ),
    },
    {
        path: "/cepas-hongos",
        name: "cepas-hongos",
        component: () =>
            import(
                /* webpackChunkName: "cepas-hongos" */ "../components/cepas/TableHongosComponent.vue"
            ),
    },
    {
        path: "/cepas-hongos/form-agregar",
        name: "form-agregar-hongos",
        component: () =>
            import(
                /* webpackChunkName: "form-agregar" */ "../components/cepas/FormCepasComponent.vue"
            ),
    },
    {
        path: "/cepas-levaduras",
        name: "cepas-levaduras",
        component: () =>
            import(
                /* webpackChunkName: "cepas-levaduras" */ "../components/cepas/TableLevadurasComponent.vue"
            ),
    },
    {
        path: "/cepas-levaduras/form-agregar",
        name: "form-agregar-levaduras",
        component: () =>
            import(
                /* webpackChunkName: "form-agregar" */ "../components/cepas/FormCepasComponent.vue"
            ),
    },
    {
        path: "/cepas-actinomicetos",
        name: "cepas-actinomicetos",
        component: () =>
            import(
                /* webpackChunkName: "cepas-actinomicetos" */ "../components/cepas/TableActinomicetosComponent.vue"
            ),
    },
    {
        path: "/cepas-actinomicetos/form-agregar",
        name: "form-agregar-actinomicetos",
        component: () =>
            import(
                /* webpackChunkName: "form-agregar" */ "../components/cepas/FormCepasComponent.vue"
            ),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
