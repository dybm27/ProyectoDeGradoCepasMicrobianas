import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    //-------------------------------TODAS------------------------------
    {
        path: "/cepas",
        name: "cepas-todas",
        component: () =>
            import(
                /* webpackChunkName: "cepas-todas" */

                "../components/cepas/TableCepasComponent.vue"
            )
    },
    {
        path: "/cepas/agregar",
        name: "cepa-agregar",
        component: () =>
            import(
                /* webpackChunkName: "cepa-agregar" */

                "../components/cepas/FormCepasComponent.vue"
            )
    },
    {
        path: "/cepas/editar/:cepaId",
        name: "cepa-editar",
        component: () =>
            import(
                /* webpackChunkName: "cepa-editar" */

                "../components/cepas/FormCepasComponent.vue"
            )
    },
    //bacterias
    {
        path: "/cepas/bacteria/:cepaId",
        name: "cepa-bacteria",
        component: () =>
            import(
                /* webpackChunkName: "cepa-bacteria" */

                "../components/cepas/AgregarEditarCaractComponent.vue"
            ),
        children: [
            {
                path: "caract-macro",
                name: "caract-macro-cepa-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-macro-cepa-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoCaractMacroComponent.vue"
                    )
            },
            {
                path: "caract-micro",
                name: "caract-micro-cepa-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-micro-cepa-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoCaractMicroComponent.vue"
                    )
            },
            {
                path: "caract-bioqui",
                name: "caract-bioqui-cepa-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-bioqui-cepa-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue"
                    )
            },
            {
                path: "caract-fisio",
                name: "caract-fisio-cepa-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-fisio-cepa-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoCaractFisioComponent.vue"
                    )
            },
            {
                path: "identi-molecu",
                name: "identi-molecu-cepa-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "identi-molecu-cepa-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue"
                    )
            },
            {
                path: "metodo-conser",
                name: "",
                component: () =>
                    import(
                        /* webpackChunkName: "metodo-conser-cepa-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue"
                    ),
                children: [
                    {
                        path: "",
                        name: "metodo-conser-cepa-bacteria",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-bacteria-tabla" */

                                "../components/cepas/bacterias/tablas/TablaMetodoConserBacteriasComponent.vue"
                            )
                    },
                    {
                        path: "agregar",
                        name: "metodo-conser-cepa-bacteria-agregar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-bacteria-agregar" */

                                "../components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue"
                            )
                    },
                    {
                        path: "editar/:metodoConserBacteriaId",
                        name: "metodo-conser-cepa-bacteria-editar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-bacteria-editar" */

                                "../components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue"
                            )
                    }
                ]
            }
        ]
    },
    //hongos
    {
        path: "/cepas/hongo/:cepaId",
        name: "cepa-hongo",
        component: () =>
            import(
                /* webpackChunkName: "cepa-hongo" */

                "../components/cepas/AgregarEditarCaractComponent.vue"
            ),
        children: [
            {
                path: "caract-macro",
                name: "caract-macro-cepa-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-macro-cepa-hongo" */

                        "../components/cepas/hongos/info-caract/InfoCaractMacroComponent.vue"
                    )
            },
            {
                path: "caract-micro",
                name: "caract-micro-cepa-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-micro-cepa-hongo" */

                        "../components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue"
                    )
            },
            {
                path: "caract-bioqui",
                name: "caract-bioqui-cepa-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-bioqui-cepa-hongo" */

                        "../components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue"
                    )
            },
            {
                path: "identi-molecu",
                name: "identi-molecu-cepa-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "identi-molecu-cepa-hongo" */

                        "../components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue"
                    )
            },
            {
                path: "metodo-conser",
                name: "",
                component: () =>
                    import(
                        /* webpackChunkName: "metodo-conser-cepa-hongo" */

                        "../components/cepas/hongos/info-caract/InfoMetodoConserComponent.vue"
                    ),
                children: [
                    {
                        path: "",
                        name: "metodo-conser-cepa-hongo",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-hongo-tabla" */

                                "../components/cepas/hongos/tablas/TablaMetodoConserHongosComponent.vue"
                            )
                    },
                    {
                        path: "agregar",
                        name: "metodo-conser-cepa-hongo-agregar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-hongo-agregar" */

                                "../components/cepas/hongos/forms-caract/FormMetodoConserComponent.vue"
                            )
                    },
                    {
                        path: "editar/:metodoConserHongoId",
                        name: "metodo-conser-cepa-hongo-editar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-hongo-editar" */

                                "../components/cepas/hongos/forms-caract/FormMetodoConserComponent.vue"
                            )
                    }
                ]
            }
        ]
    },
    //levaduras
    {
        path: "/cepas/levadura/:cepaId",
        name: "cepa-levadura",
        component: () =>
            import(
                /* webpackChunkName: "cepa-levadura" */

                "../components/cepas/AgregarEditarCaractComponent.vue"
            ),
        children: [
            {
                path: "caract-macro",
                name: "caract-macro-cepa-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-macro-cepa-levadura" */

                        "../components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue"
                    )
            },
            {
                path: "caract-micro",
                name: "caract-micro-cepa-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-micro-cepa-levadura" */

                        "../components/cepas/levaduras/info-caract/InfoCaractMicroComponent.vue"
                    )
            },
            {
                path: "caract-bioqui",
                name: "caract-bioqui-cepa-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-bioqui-cepa-levadura" */

                        "../components/cepas/levaduras/info-caract/InfoCaractBioquiComponent.vue"
                    )
            },
            {
                path: "identi-molecu",
                name: "identi-molecu-cepa-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "identi-molecu-cepa-levadura" */

                        "../components/cepas/levaduras/info-caract/InfoIdentiMolecuComponent.vue"
                    )
            },
            {
                path: "metodo-conser",
                name: "",
                component: () =>
                    import(
                        /* webpackChunkName: "metodo-conser-cepa-levadura" */

                        "../components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue"
                    ),
                children: [
                    {
                        path: "",
                        name: "metodo-conser-cepa-levadura",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-levadura-tabla" */

                                "../components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue"
                            )
                    },
                    {
                        path: "agregar",
                        name: "metodo-conser-cepa-levadura-agregar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-levadura-agregar" */

                                "../components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue"
                            )
                    },
                    {
                        path: "editar/:metodoConserLevaduraId",
                        name: "metodo-conser-cepa-levadura-editar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-levadura-editar" */

                                "../components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue"
                            )
                    }
                ]
            }
        ]
    },
    //actinomiceto

    // ------------------------  BACTERIAS ------------------------------------------
    {
        path: "/bacterias",
        name: "cepas-bacterias",
        component: () =>
            import(
                /* webpackChunkName: "cepas-bacterias" */

                "../components/cepas/bacterias/tablas/TablaBacteriasComponent.vue"
            )
    },
    {
        path: "/bacterias/agregar",
        name: "cepa-bacteria-agregar",
        component: () =>
            import(
                /* webpackChunkName: "cepa-bacteria-agregar" */

                "../components/cepas/FormCepasComponent.vue"
            )
    },
    {
        path: "/bacterias/editar/:cepaId",
        name: "cepa-bacteria-editar",
        component: () =>
            import(
                /* webpackChunkName: "cepa-bacteria-editar" */

                "../components/cepas/FormCepasComponent.vue"
            )
    },
    {
        path: "/bacterias/:cepaBacteriaId",
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
                    )
            },
            {
                path: "caract-micro",
                name: "caract-micro-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-micro-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoCaractMicroComponent.vue"
                    )
            },
            {
                path: "caract-bioqui",
                name: "caract-bioqui-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-bioqui-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue"
                    )
            },
            {
                path: "caract-fisio",
                name: "caract-fisio-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-fisio-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoCaractFisioComponent.vue"
                    )
            },
            {
                path: "identi-molecu",
                name: "identi-molecu-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "identi-molecu-bacteria" */

                        "../components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue"
                    )
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
                            )
                    },
                    {
                        path: "agregar",
                        name: "metodo-conser-bacteria-agregar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-bacteria-agregar" */

                                "../components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue"
                            )
                    },
                    {
                        path: "editar/:metodoConserBacteriaId",
                        name: "metodo-conser-bacteria-editar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-bacteria-editar" */

                                "../components/cepas/bacterias/forms-caract/FormMetodoConserComponent.vue"
                            )
                    }
                ]
            }
        ]
    },

    // ---------------------- HONGOS ------------------------------------------------
    {
        path: "/hongos",
        name: "cepas-hongos",
        component: () =>
            import(
                /* webpackChunkName: "cepas-hongos" */

                "../components/cepas/hongos/tablas/TablaHongosComponent.vue"
            )
    },
    {
        path: "/hongos/agregar",
        name: "cepa-hongo-agregar",
        component: () =>
            import(
                /* webpackChunkName: "cepa-hongo-agregar" */

                "../components/cepas/FormCepasComponent.vue"
            )
    },
    {
        path: "/hongos/editar/:cepaId",
        name: "cepa-hongo-editar",
        component: () =>
            import(
                /* webpackChunkName: "cepa-hongo-editar" */

                "../components/cepas/FormCepasComponent.vue"
            )
    },
    {
        path: "/hongos/:cepaHongoId",
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

                        "../components/cepas/hongos/info-caract/InfoCaractMacroComponent.vue"
                    )
            },
            {
                path: "caract-micro",
                name: "caract-micro-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-micro-hongo" */

                        "../components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue"
                    )
            },
            {
                path: "caract-bioqui",
                name: "caract-bioqui-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-bioqui-hongo" */

                        "../components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue"
                    )
            },
            {
                path: "identi-molecu",
                name: "identi-molecu-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "identi-molecu-hongo" */

                        "../components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue"
                    )
            },
            {
                path: "metodo-conser",
                name: "",
                component: () =>
                    import(
                        /* webpackChunkName: "metodo-conser-hongo" */

                        "../components/cepas/hongos/info-caract/InfoMetodoConserComponent.vue"
                    ),
                children: [
                    {
                        path: "",
                        name: "metodo-conser-hongo",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-hongo-tabla" */

                                "../components/cepas/hongos/tablas/TablaMetodoConserHongosComponent.vue"
                            )
                    },
                    {
                        path: "agregar",
                        name: "metodo-conser-hongo-agregar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-hongo-agregar" */

                                "../components/cepas/hongos/forms-caract/FormMetodoConserComponent.vue"
                            )
                    },
                    {
                        path: "editar/:metodoConserHongoId",
                        name: "metodo-conser-hongo-editar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-hongo-editar" */

                                "../components/cepas/hongos/forms-caract/FormMetodoConserComponent.vue"
                            )
                    }
                ]
            }
        ]
    },

    // ---------------------- LEVADURAS ------------------------------------------------
    {
        path: "/levaduras",
        name: "cepas-levaduras",
        component: () =>
            import(
                /* webpackChunkName: "cepas-levaduras" */ "../components/cepas/levaduras/tablas/TablaLevadurasComponent.vue"
            )
    },
    {
        path: "/levaduras/agregar",
        name: "cepa-levadura-agregar",
        component: () =>
            import(
                /* webpackChunkName: "cepa-levadura-agregar" */

                "../components/cepas/FormCepasComponent.vue"
            )
    },
    {
        path: "/levaduras/editar/:cepaId",
        name: "cepa-levadura-editar",
        component: () =>
            import(
                /* webpackChunkName: "cepa-levadura-editar" */

                "../components/cepas/FormCepasComponent.vue"
            )
    },
    {
        path: "/levaduras/:cepaLevaduraId",
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

                        "../components/cepas/levaduras/info-caract/InfoCaractMacroComponent.vue"
                    )
            },
            {
                path: "caract-micro",
                name: "caract-micro-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-micro-levadura" */

                        "../components/cepas/levaduras/info-caract/InfoCaractMicroComponent.vue"
                    )
            },
            {
                path: "caract-bioqui",
                name: "caract-bioqui-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-bioqui-levadura" */

                        "../components/cepas/levaduras/info-caract/InfoCaractBioquiComponent.vue"
                    )
            },
            {
                path: "identi-molecu",
                name: "identi-molecu-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "identi-molecu-levadura" */

                        "../components/cepas/levaduras/info-caract/InfoIdentiMolecuComponent.vue"
                    )
            },
            {
                path: "metodo-conser",
                name: "",
                component: () =>
                    import(
                        /* webpackChunkName: "metodo-conser-levadura" */

                        "../components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue"
                    ),
                children: [
                    {
                        path: "",
                        name: "metodo-conser-levadura",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-levadura-tabla" */

                                "../components/cepas/levaduras/tablas/TablaMetodoConserLevadurasComponent.vue"
                            )
                    },
                    {
                        path: "agregar",
                        name: "metodo-conser-levadura-agregar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-levadura-agregar" */

                                "../components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue"
                            )
                    },
                    {
                        path: "editar/:metodoConserLevaduraId",
                        name: "metodo-conser-levadura-editar",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-levadura-editar" */

                                "../components/cepas/levaduras/forms-caract/FormMetodoConserComponent.vue"
                            )
                    }
                ]
            }
        ]
    },

    // ---------------------- ACTINOMICETOS ------------------------------------------------
    {
        path: "/actinomicetos",
        name: "cepas-actinomicetos",
        component: () =>
            import(
                /* webpackChunkName: "cepas-actinomicetos" */ "../components/cepas/actinomicetos/tablas/TablaActinomicetosComponent.vue"
            )
    },
    {
        path: "/actinomicetos/agregar",
        name: "cepa-actinomiceto-agregar",
        component: () =>
            import(
                /* webpackChunkName: "cepa-actinomiceto-agregar" */

                "../components/cepas/FormCepasComponent.vue"
            )
    },
    {
        path: "/actinomicetos/editar/:cepaId",
        name: "cepa-actinomiceto-editar",
        component: () =>
            import(
                /* webpackChunkName: "cepa-actinomiceto-editar" */

                "../components/cepas/FormCepasComponent.vue"
            )
    },
    {
        path: "/actinomicetos/:cepaActinomicetoId",
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

                        "../components/cepas/actinomicetos/info-caract/InfoCaractMacroComponent.vue"
                    )
            },
            {
                path: "caract-micro",
                name: "caract-micro-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-micro-actinomiceto" */

                        "../components/cepas/actinomicetos/info-caract/InfoCaractMicroComponent.vue"
                    )
            },
            {
                path: "identi-bioqui",
                name: "identi-bioqui-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "identi-bioqui-actinomiceto" */

                        "../components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue"
                    )
            },
            {
                path: "otras-caract",
                name: "otras-caract-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "otras-caract-actinomiceto" */

                        "../components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue"
                    )
            },
            {
                path: "caract-molecu",
                name: "caract-molecu-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-molecu-actinomiceto" */

                        "../components/cepas/actinomicetos/info-caract/InfoCaractMolecuComponent.vue"
                    )
            },
            {
                path: "metodo-conser",
                name: "metodo-conser-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "metodo-conser-actinomiceto" */

                        "../components/cepas/actinomicetos/info-caract/InfoMetodoConserComponent.vue"
                    )
            }
        ]
    },
    // ----------------------------------------------------------------------------------------------

    // ------------------------------- USUARIOS ------------------------------------------

    {
        path: "/usuarios",
        name: "",
        component: () =>
            import(
                /* webpackChunkName: "info_usuarios" */

                "../components/usuarios/InfoTablaUsuariosComponent.vue"
            ),
        children: [
            {
                path: "",
                name: "tabla-usuarios",
                component: () =>
                    import(
                        /* webpackChunkName: "tabla-usuarios" */

                        "../components/usuarios/tablas/TablaUsuariosComponent.vue"
                    )
            },
            {
                path: "agregar",
                name: "agregar-usuario",
                component: () =>
                    import(
                        /* webpackChunkName: "agregar-usuario" */

                        "../components/usuarios/FormUsuariosComponent.vue"
                    )
            },
            {
                path: "editar/:usuarioId",
                name: "editar-usuario",
                component: () =>
                    import(
                        /* webpackChunkName: "editar-usuario" */

                        "../components/usuarios/FormUsuariosComponent.vue"
                    )
            }
        ]
    },
    {
        path: "/usuarios/tabla-seguimiento",
        name: "tabla-seguimiento",
        component: () =>
            import(
                /* webpackChunkName: "tabla-seguimiento" */

                "../components/usuarios/tablas/TablaSeguimientoComponent.vue"
            )
    }
    /**{
        path: "*",
        name: "",
        component: () =>
            import(
                webpackChunkName: "tabla-usuarios" 

                "../components/error 404"
            )
    } */
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
