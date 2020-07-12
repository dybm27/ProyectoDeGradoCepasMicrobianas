import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
Vue.use(VueRouter);

const routes = [
    //-------------------------------TODAS------------------------------
    {
        path: "/cepas",
        name: "cepas",
        component: () =>
            import(
                /* webpackChunkName: "cepas-todas" */

                "../components/cepas/ContainerCepasComponent.vue"
            ),
        children: [
            {
                path: "tabla",
                name: "cepas-todas",
                component: () =>
                    import(
                        /* webpackChunkName: "cepas-todas" */

                        "../components/cepas/TableCepasComponent.vue"
                    ),
                meta: { title: "Tabla Cepas" }
            },
            {
                path: "agregar",
                name: "cepa-agregar",
                component: () =>
                    import(
                        /* webpackChunkName: "cepa-agregar" */

                        "../components/cepas/FormCepasComponent.vue"
                    ),
                meta: { title: "Agregar Cepa" }
            },
            {
                path: "editar/:cepaId",
                name: "cepa-editar",
                component: () =>
                    import(
                        /* webpackChunkName: "cepa-editar" */

                        "../components/cepas/FormCepasComponent.vue"
                    ),
                meta: { title: "Editar Cepa" }
            },
            //bacterias
            {
                path: "bacteria/ver/:cepaId",
                name: "ver-cepa-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "ver-cepa-bacteria" */

                        "../components/cepas/VerCepaComponent.vue"
                    ),
                meta: { title: "Ver Cepa" }
            },
            {
                path: "bacteria/:cepaId",
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
                            ),
                        meta: { title: "Características Macroscópica" }
                    },
                    {
                        path: "caract-micro",
                        name: "caract-micro-cepa-bacteria",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-micro-cepa-bacteria" */

                                "../components/cepas/bacterias/info-caract/InfoCaractMicroComponent.vue"
                            ),
                        meta: { title: "Características Microscópica" }
                    },
                    {
                        path: "caract-bioqui",
                        name: "caract-bioqui-cepa-bacteria",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-bioqui-cepa-bacteria" */

                                "../components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue"
                            ),
                        meta: { title: "Características Bioquímicas" }
                    },
                    {
                        path: "caract-fisio",
                        name: "caract-fisio-cepa-bacteria",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-fisio-cepa-bacteria" */

                                "../components/cepas/bacterias/info-caract/InfoCaractFisioComponent.vue"
                            ),
                        meta: { title: "Características Fisiológicas" }
                    },
                    {
                        path: "identi-molecu",
                        name: "identi-molecu-cepa-bacteria",
                        component: () =>
                            import(
                                /* webpackChunkName: "identi-molecu-cepa-bacteria" */

                                "../components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue"
                            ),
                        meta: { title: "Identificación Molecular" }
                    },
                    {
                        path: "metodo-conser",
                        name: "metodo-conser-cepa-bacteria",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-bacteria" */

                                "../components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue"
                            ),
                        meta: { title: "Métodos de Conservación" }
                    }
                ]
            },
            //hongos
            {
                path: "hongo/ver/:cepaId",
                name: "ver-cepa-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "ver-cepa-hongo" */

                        "../components/cepas/VerCepaComponent.vue"
                    ),
                meta: { title: "Ver Cepa" }
            },
            {
                path: "hongo/:cepaId",
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
                            ),
                        meta: { title: "Características Macroscópica" }
                    },
                    {
                        path: "caract-micro",
                        name: "caract-micro-cepa-hongo",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-micro-cepa-hongo" */

                                "../components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue"
                            ),
                        meta: { title: "Características Microscópica" }
                    },
                    {
                        path: "caract-bioqui",
                        name: "caract-bioqui-cepa-hongo",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-bioqui-cepa-hongo" */

                                "../components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue"
                            ),
                        meta: { title: "Características Bioquímicas" }
                    },
                    {
                        path: "identi-molecu",
                        name: "identi-molecu-cepa-hongo",
                        component: () =>
                            import(
                                /* webpackChunkName: "identi-molecu-cepa-hongo" */

                                "../components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue"
                            ),
                        meta: { title: "Identificación Molecular" }
                    },
                    {
                        path: "metodo-conser",
                        name: "metodo-conser-cepa-hongo",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-hongo" */

                                "../components/cepas/hongos/info-caract/InfoMetodoConserComponent.vue"
                            ),
                        meta: { title: "Métodos de Conservación" }
                    }
                ]
            },
            //levaduras
            {
                path: "levadura/ver/:cepaId",
                name: "ver-cepa-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "ver-cepa-levadura" */

                        "../components/cepas/VerCepaComponent.vue"
                    ),
                meta: { title: "Ver Cepa" }
            },
            {
                path: "levadura/:cepaId",
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
                            ),
                        meta: { title: "Características Macroscópica" }
                    },
                    {
                        path: "caract-micro",
                        name: "caract-micro-cepa-levadura",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-micro-cepa-levadura" */

                                "../components/cepas/levaduras/info-caract/InfoCaractMicroComponent.vue"
                            ),
                        meta: { title: "Características Microscópica" }
                    },
                    {
                        path: "caract-bioqui",
                        name: "caract-bioqui-cepa-levadura",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-bioqui-cepa-levadura" */

                                "../components/cepas/levaduras/info-caract/InfoCaractBioquiComponent.vue"
                            ),
                        meta: { title: "Características Bioquímicas" }
                    },
                    {
                        path: "identi-molecu",
                        name: "identi-molecu-cepa-levadura",
                        component: () =>
                            import(
                                /* webpackChunkName: "identi-molecu-cepa-levadura" */

                                "../components/cepas/levaduras/info-caract/InfoIdentiMolecuComponent.vue"
                            ),
                        meta: { title: "Identificación Molecular" }
                    },
                    {
                        path: "metodo-conser",
                        name: "metodo-conser-cepa-levadura",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-levadura" */

                                "../components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue"
                            ),
                        meta: { title: "Métodos de Conservación" }
                    }
                ]
            },
            //actinomiceto
            {
                path: "actinomiceto/ver/:cepaId",
                name: "ver-cepa-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "ver-cepa-actinomiceto" */

                        "../components/cepas/VerCepaComponent.vue"
                    ),
                meta: { title: "Ver Cepa" }
            },
            {
                path: "actinomiceto/:cepaId",
                name: "cepa-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "cepa-actinomiceto" */

                        "../components/cepas/AgregarEditarCaractComponent.vue"
                    ),
                children: [
                    {
                        path: "caract-macro",
                        name: "caract-macro-cepa-actinomiceto",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-macro-cepa-actinomiceto" */

                                "../components/cepas/actinomicetos/info-caract/InfoCaractMacroComponent.vue"
                            ),
                        meta: { title: "Características Macroscópica" }
                    },
                    {
                        path: "caract-micro",
                        name: "caract-micro-cepa-actinomiceto",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-micro-cepa-actinomiceto" */

                                "../components/cepas/actinomicetos/info-caract/InfoCaractMicroComponent.vue"
                            ),
                        meta: { title: "Características Microscópica" }
                    },
                    {
                        path: "identi-bioqui",
                        name: "identi-bioqui-cepa-actinomiceto",
                        component: () =>
                            import(
                                /* webpackChunkName: "identi-bioqui-cepa-actinomiceto" */

                                "../components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue"
                            ),
                        meta: { title: "Identificación Bioquímica" }
                    },
                    {
                        path: "otras-caract",
                        name: "otras-caract-cepa-actinomiceto",
                        component: () =>
                            import(
                                /* webpackChunkName: "otras-caract-cepa-actinomiceto" */

                                "../components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue"
                            ),
                        meta: { title: "Otras Características" }
                    },
                    {
                        path: "caract-molecu",
                        name: "caract-molecu-cepa-actinomiceto",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-molecu-cepa-actinomiceto" */

                                "../components/cepas/actinomicetos/info-caract/InfoCaractMolecuComponent.vue"
                            ),
                        meta: { title: "Características Moleculares" }
                    },
                    {
                        path: "metodo-conser",
                        name: "metodo-conser-cepa-actinomiceto",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-cepa-actinomiceto" */

                                "../components/cepas/actinomicetos/info-caract/InfoMetodoConserComponent.vue"
                            ),
                        meta: { title: "Métodos de Conservación" }
                    }
                ]
            }
        ]
    },
    // ------------------------  BACTERIAS ------------------------------------------
    {
        path: "/bacterias",
        name: "bacterias",
        component: () =>
            import(
                /* webpackChunkName: "bacterias" */

                "../components/cepas/bacterias/ContainerBacteriasComponent.vue"
            ),
        children: [
            {
                path: "tabla",
                name: "cepas-bacterias",
                component: () =>
                    import(
                        /* webpackChunkName: "cepas-bacterias" */

                        "../components/cepas/bacterias/tablas/TablaBacteriasComponent.vue"
                    ),
                meta: { title: "Tabla Bacterias" }
            },
            {
                path: "agregar",
                name: "cepa-bacteria-agregar",
                component: () =>
                    import(
                        /* webpackChunkName: "cepa-bacteria-agregar" */

                        "../components/cepas/FormCepasComponent.vue"
                    ),
                meta: { title: "Agregar Bacteria" }
            },
            {
                path: "editar/:cepaId",
                name: "cepa-bacteria-editar",
                component: () =>
                    import(
                        /* webpackChunkName: "cepa-bacteria-editar" */

                        "../components/cepas/FormCepasComponent.vue"
                    ),
                meta: { title: "Editar Bacteria" }
            },
            {
                path: ":cepaBacteriaId",
                name: "caract-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-bacteria" */

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
                        meta: { title: "Características Macroscópica" }
                    },
                    {
                        path: "caract-micro",
                        name: "caract-micro-bacteria",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-micro-bacteria" */

                                "../components/cepas/bacterias/info-caract/InfoCaractMicroComponent.vue"
                            ),
                        meta: { title: "Características Microscópica" }
                    },
                    {
                        path: "caract-bioqui",
                        name: "caract-bioqui-bacteria",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-bioqui-bacteria" */

                                "../components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue"
                            ),
                        meta: { title: "Características Bioquímicas" }
                    },
                    {
                        path: "caract-fisio",
                        name: "caract-fisio-bacteria",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-fisio-bacteria" */

                                "../components/cepas/bacterias/info-caract/InfoCaractFisioComponent.vue"
                            ),
                        meta: { title: "Características Fisiológicas" }
                    },
                    {
                        path: "identi-molecu",
                        name: "identi-molecu-bacteria",
                        component: () =>
                            import(
                                /* webpackChunkName: "identi-molecu-bacteria" */

                                "../components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue"
                            ),
                        meta: { title: "Identificación Molecular" }
                    },
                    {
                        path: "metodo-conser",
                        name: "metodo-conser-bacteria",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-bacteria" */

                                "../components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue"
                            ),
                        meta: { title: "Métodos de Conservación" }
                    }
                ]
            },
            {
                path: "ver/:cepaBacteriaId",
                name: "ver-bacteria",
                component: () =>
                    import(
                        /* webpackChunkName: "ver-bacteria" */

                        "../components/cepas/VerCepaComponent.vue"
                    ),
                meta: { title: "Ver Bacteria" }
            }
        ]
    },

    // ---------------------- HONGOS ------------------------------------------------
    {
        path: "/hongos",
        name: "hongos",
        component: () =>
            import(
                /* webpackChunkName: "hongos" */

                "../components/cepas/hongos/ContainerHongosComponent.vue"
            ),
        children: [
            {
                path: "tabla",
                name: "cepas-hongos",
                component: () =>
                    import(
                        /* webpackChunkName: "cepas-hongos" */

                        "../components/cepas/hongos/tablas/TablaHongosComponent.vue"
                    ),
                meta: { title: "Tabla Hongos" }
            },
            {
                path: "agregar",
                name: "cepa-hongo-agregar",
                component: () =>
                    import(
                        /* webpackChunkName: "cepa-hongo-agregar" */

                        "../components/cepas/FormCepasComponent.vue"
                    ),
                meta: { title: "Agregar Hongo" }
            },
            {
                path: "editar/:cepaId",
                name: "cepa-hongo-editar",
                component: () =>
                    import(
                        /* webpackChunkName: "cepa-hongo-editar" */

                        "../components/cepas/FormCepasComponent.vue"
                    ),
                meta: { title: "Editar Hongo" }
            },
            {
                path: ":cepaHongoId",
                name: "caract-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-hongo" */

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
                            ),
                        meta: { title: "Características Macroscópica" }
                    },
                    {
                        path: "caract-micro",
                        name: "caract-micro-hongo",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-micro-hongo" */

                                "../components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue"
                            ),
                        meta: { title: "Características Microscópica" }
                    },
                    {
                        path: "caract-bioqui",
                        name: "caract-bioqui-hongo",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-bioqui-hongo" */

                                "../components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue"
                            ),
                        meta: { title: "Características Bioquímicas" }
                    },
                    {
                        path: "identi-molecu",
                        name: "identi-molecu-hongo",
                        component: () =>
                            import(
                                /* webpackChunkName: "identi-molecu-hongo" */

                                "../components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue"
                            ),
                        meta: { title: "Identificación Molecular" }
                    },
                    {
                        path: "metodo-conser",
                        name: "metodo-conser-hongo",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-hongo" */

                                "../components/cepas/hongos/info-caract/InfoMetodoConserComponent.vue"
                            ),
                        meta: { title: "Métodos de Conservación" }
                    }
                ]
            },
            {
                path: "ver/:cepaHongoId",
                name: "ver-hongo",
                component: () =>
                    import(
                        /* webpackChunkName: "ver-hongo" */

                        "../components/cepas/VerCepaComponent.vue"
                    ),
                meta: { title: "Ver Hongo" }
            }
        ]
    },
    // ---------------------- LEVADURAS ------------------------------------------------
    {
        path: "/levaduras",
        name: "levaduras",
        component: () =>
            import(
                /* webpackChunkName: "levaduras" */

                "../components/cepas/levaduras/ContainerLevadurasComponent.vue"
            ),
        children: [
            {
                path: "tabla",
                name: "cepas-levaduras",
                component: () =>
                    import(
                        /* webpackChunkName: "cepas-levaduras" */ "../components/cepas/levaduras/tablas/TablaLevadurasComponent.vue"
                    ),
                meta: { title: "Tabla Levaduras" }
            },
            {
                path: "agregar",
                name: "cepa-levadura-agregar",
                component: () =>
                    import(
                        /* webpackChunkName: "cepa-levadura-agregar" */

                        "../components/cepas/FormCepasComponent.vue"
                    ),
                meta: { title: "Agregar Levadura" }
            },
            {
                path: "editar/:cepaId",
                name: "cepa-levadura-editar",
                component: () =>
                    import(
                        /* webpackChunkName: "cepa-levadura-editar" */

                        "../components/cepas/FormCepasComponent.vue"
                    ),
                meta: { title: "Editar Levadura" }
            },
            {
                path: ":cepaLevaduraId",
                name: "caract-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-levadura" */

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
                            ),
                        meta: { title: "Características Macroscópica" }
                    },
                    {
                        path: "caract-micro",
                        name: "caract-micro-levadura",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-micro-levadura" */

                                "../components/cepas/levaduras/info-caract/InfoCaractMicroComponent.vue"
                            ),
                        meta: { title: "Características Microscópica" }
                    },
                    {
                        path: "caract-bioqui",
                        name: "caract-bioqui-levadura",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-bioqui-levadura" */

                                "../components/cepas/levaduras/info-caract/InfoCaractBioquiComponent.vue"
                            ),
                        meta: { title: "Características Bioquímicas" }
                    },
                    {
                        path: "identi-molecu",
                        name: "identi-molecu-levadura",
                        component: () =>
                            import(
                                /* webpackChunkName: "identi-molecu-levadura" */

                                "../components/cepas/levaduras/info-caract/InfoIdentiMolecuComponent.vue"
                            ),
                        meta: { title: "Identificación Molecular" }
                    },
                    {
                        path: "metodo-conser",
                        name: "metodo-conser-levadura",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-levadura" */

                                "../components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue"
                            ),
                        meta: { title: "Métodos de Conservación" }
                    }
                ]
            },
            {
                path: "ver/:cepaLevaduraId",
                name: "ver-levadura",
                component: () =>
                    import(
                        /* webpackChunkName: "ver-levadura" */

                        "../components/cepas/VerCepaComponent.vue"
                    ),
                meta: { title: "Ver Levadura" }
            }
        ]
    },
    // ---------------------- ACTINOMICETOS ------------------------------------------------
    {
        path: "/actinomicetos",
        name: "actinomicetos",
        component: () =>
            import(
                /* webpackChunkName: "actinomicetos" */

                "../components/cepas/actinomicetos/ContainerActinomicetosComponent.vue"
            ),
        children: [
            {
                path: "tabla",
                name: "cepas-actinomicetos",
                component: () =>
                    import(
                        /* webpackChunkName: "cepas-actinomicetos" */ "../components/cepas/actinomicetos/tablas/TablaActinomicetosComponent.vue"
                    ),
                meta: { title: "Tabla Actinomicetos" }
            },
            {
                path: "agregar",
                name: "cepa-actinomiceto-agregar",
                component: () =>
                    import(
                        /* webpackChunkName: "cepa-actinomiceto-agregar" */

                        "../components/cepas/FormCepasComponent.vue"
                    ),
                meta: { title: "Agregar Actinomiceto" }
            },
            {
                path: "editar/:cepaId",
                name: "cepa-actinomiceto-editar",
                component: () =>
                    import(
                        /* webpackChunkName: "cepa-actinomiceto-editar" */

                        "../components/cepas/FormCepasComponent.vue"
                    ),
                meta: { title: "Editar Actinomiceto" }
            },
            {
                path: ":cepaActinomicetoId",
                name: "caract-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "caract-actinomiceto" */

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
                            ),
                        meta: { title: "Características Macroscópica" }
                    },
                    {
                        path: "caract-micro",
                        name: "caract-micro-actinomiceto",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-micro-actinomiceto" */

                                "../components/cepas/actinomicetos/info-caract/InfoCaractMicroComponent.vue"
                            ),
                        meta: { title: "Características Microscópica" }
                    },
                    {
                        path: "identi-bioqui",
                        name: "identi-bioqui-actinomiceto",
                        component: () =>
                            import(
                                /* webpackChunkName: "identi-bioqui-actinomiceto" */

                                "../components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue"
                            ),
                        meta: { title: "Identificación Bioquímica" }
                    },
                    {
                        path: "otras-caract",
                        name: "otras-caract-actinomiceto",
                        component: () =>
                            import(
                                /* webpackChunkName: "otras-caract-actinomiceto" */

                                "../components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue"
                            ),
                        meta: { title: "Otras Características" }
                    },
                    {
                        path: "caract-molecu",
                        name: "caract-molecu-actinomiceto",
                        component: () =>
                            import(
                                /* webpackChunkName: "caract-molecu-actinomiceto" */

                                "../components/cepas/actinomicetos/info-caract/InfoCaractMolecuComponent.vue"
                            ),
                        meta: { title: "Características Moleculares" }
                    },
                    {
                        path: "metodo-conser",
                        name: "metodo-conser-actinomiceto",
                        component: () =>
                            import(
                                /* webpackChunkName: "metodo-conser-actinomiceto" */

                                "../components/cepas/actinomicetos/info-caract/InfoMetodoConserComponent.vue"
                            ),
                        meta: { title: "Métodos de Conservación" }
                    }
                ]
            },
            {
                path: "ver/:cepaActinomicetoId",
                name: "ver-actinomiceto",
                component: () =>
                    import(
                        /* webpackChunkName: "ver-actinomiceto" */

                        "../components/cepas/VerCepaComponent.vue"
                    ),
                meta: { title: "Ver Actinomiceto" }
            }
        ]
    },
    // ----------------------------------------------------------------------------------------------

    // ------------------------------- USUARIOS ------------------------------------------

    {
        path: "/usuarios",
        name: "usuarios",
        component: () =>
            import(
                /* webpackChunkName: "usuarios" */

                "../components/usuarios/NavUsuariosComponent.vue"
            ),
        children: [
            {
                path: "tabla-usuarios",
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
                            ),
                        meta: { title: "Tabla Usuarios" }
                    },
                    {
                        path: "agregar",
                        name: "agregar-usuario",
                        component: () =>
                            import(
                                /* webpackChunkName: "agregar-usuario" */

                                "../components/usuarios/FormUsuariosComponent.vue"
                            ),
                        meta: { title: "Agregar Usuario" }
                    },
                    {
                        path: "editar/:usuarioId",
                        name: "editar-usuario",
                        component: () =>
                            import(
                                /* webpackChunkName: "editar-usuario" */

                                "../components/usuarios/FormUsuariosComponent.vue"
                            ),
                        meta: { title: "Tabla Usuario" }
                    }
                ]
            },
            {
                path: "tabla-seguimiento",
                name: "tabla-seguimiento",
                component: () =>
                    import(
                        /* webpackChunkName: "tabla-seguimiento" */

                        "../components/usuarios/tablas/TablaSeguimientoComponent.vue"
                    ),
                meta: { title: "Tabla Seguimientos" }
            }
        ]
    },
    // ------------------------------- OTRA INFORMACION ------------------------------------------
    {
        path: "/otra-info/",
        name: "otra-info",
        component: () =>
            import(
                /* webpackChunkName: "otra-info" */

                "../components/otra-info/NavOtraInfoComponent.vue"
            ),
        children: [
            {
                path: "cepas",
                name: "tablas-cepas",
                component: () =>
                    import(
                        /* webpackChunkName: "tablas-cepas" */

                        "../components/otra-info/CepasComponent.vue"
                    ),
                meta: { title: "Tablas Info Cepas" }
            },
            {
                path: "bacterias",
                name: "tablas-bacterias",
                component: () =>
                    import(
                        /* webpackChunkName: "otra-info-bacterias" */

                        "../components/otra-info/BacteriasComponent.vue"
                    ),
                meta: { title: "Tablas Info Bacterias" }
            },
            {
                path: "hongos",
                name: "tablas-hongos",
                component: () =>
                    import(
                        /* webpackChunkName: "tablas-hongos" */

                        "../components/otra-info/HongosComponent.vue"
                    ),
                meta: { title: "Tablas Info Hongos" }
            },
            {
                path: "levaduras",
                name: "tablas-levaduras",
                component: () =>
                    import(
                        /* webpackChunkName: "tablas-levaduras" */

                        "../components/otra-info/LevadurasComponent.vue"
                    ),
                meta: { title: "Tablas Info Levaduras" }
            },
            {
                path: "actinomicetos",
                name: "tablas-actinomicetos",
                component: () =>
                    import(
                        /* webpackChunkName: "tablas-actinomicetos" */

                        "../components/otra-info/ActinomicetosComponent.vue"
                    ),
                meta: { title: "Tablas Info Actinomicetos" }
            }
        ]
    },
    // ------------------------------- QUIENES SOMOS ------------------------------------------
    {
        path: "/quienes-somos",
        name: "quienes-somos",
        component: () =>
            import(
                /* webpackChunkName: "quienes-somos" */

                "../components/sitio-web/quienes-somos/NavQuienesSomosComponent.vue"
            ),
        children: [
            {
                path: "mision",
                name: "mision",
                component: () =>
                    import(
                        /* webpackChunkName: "mision" */

                        "../components/sitio-web/quienes-somos/MisionComponent.vue"
                    ),
                meta: { title: "Misión" }
            },
            {
                path: "vision",
                name: "vision",
                component: () =>
                    import(
                        /* webpackChunkName: "vision" */

                        "../components/sitio-web/quienes-somos/VisionComponent.vue"
                    ),
                meta: { title: "Visión" }
            },
            {
                path: "objetivos",
                name: "objetivos",
                component: () =>
                    import(
                        /* webpackChunkName: "objetivos" */

                        "../components/sitio-web/quienes-somos/ObjetivosComponent.vue"
                    ),
                meta: { title: "Objetivos" }
            }
        ]
    },

    // ------------------------------- DOCUMENTOS ------------------------------------------
    {
        path: "/documentos",
        name: "documentos",
        component: () =>
            import(
                /* webpackChunkName: "documentos" */

                "../components/sitio-web/documentos/NavComponent.vue"
            ),
        children: [
            {
                path: "proyectos",
                name: "proyectos",
                component: () =>
                    import(
                        /* webpackChunkName: "proyectos" */

                        "../components/sitio-web/documentos/proyectos/ContainerComponent.vue"
                    ),
                meta: { title: "Proyectos" }
            },
            {
                path: "publicaciones",
                name: "publicaciones",
                component: () =>
                    import(
                        /* webpackChunkName: "publicaciones" */

                        "../components/sitio-web/documentos/publicaciones/ContainerComponent.vue"
                    ),
                meta: { title: "Publicaciones" }
            }
        ]
    },

    // ------------------------------- PUBLICIDAD ------------------------------------------
    {
        path: "/publicidad",
        name: "publicidad",
        component: () =>
            import(
                /* webpackChunkName: "publicidad" */

                "../components/sitio-web/publicidad/NavComponent.vue"
            ),
        children: [
            {
                path: "noticias",
                name: "noticias",
                component: () =>
                    import(
                        /* webpackChunkName: "noticias" */

                        "../components/sitio-web/publicidad/noticias/ContainerComponent.vue"
                    ),
                meta: { title: "Noticias" }
            },
            {
                path: "actividades",
                name: "actividades",
                component: () =>
                    import(
                        /* webpackChunkName: "actividades" */

                        "../components/sitio-web/publicidad/actividades/ContainerComponent.vue"
                    ),
                meta: { title: "Actividades" }
            },
            {
                path: "novedades",
                name: "novedades",
                component: () =>
                    import(
                        /* webpackChunkName: "novedades" */

                        "../components/sitio-web/publicidad/novedades/ContainerComponent.vue"
                    ),
                meta: { title: "Novedades" }
            }
        ]
    },
    {
        path: "/perfil",
        name: "",
        meta: { title: "Perfil" }
    },
    {
        path: "/calendario",
        name: "",
        meta: { title: "Calendario" }
    },
    {
        path: "/imagenes-login/ver",
        name: "",
        meta: { title: "Imagenes Login" }
    },
    {
        path: "/investigadores",
        name: "",
        meta: { title: "Investigadores" }
    },
    {
        path: "/equipamientos",
        name: "",
        meta: { title: "Equipamientos" }
    },
    {
        path: "*",
        name: "",
        meta: { title: "Error 404" }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;
