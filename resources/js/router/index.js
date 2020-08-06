import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
Vue.use(VueRouter);

const routes = [
    //-------------------------------TODAS------------------------------
    {
        path: "/cepas",
        name: "",
        component: () =>
            import(
                /* webpackChunkName: "cepas-todas" */

                "../components/cepas/CepasComponent.vue"
            ),
        children: [
            {
                path: "",
                name: "",
                component: () =>
                    import(
                        /* webpackChunkName: "cepas-todas-container" */

                        "../components/cepas/ContainerRouterComponent.vue"
                    ),
                children: [
                    {
                        path: "",
                        name: "cepas",
                        component: () =>
                            import(
                                /* webpackChunkName: "cepas" */

                                "../components/cepas/ContainerFormTablaComponent.vue"
                            ),
                        meta: {
                            title: "Cepas Microbianas",
                            permisos: [
                                "agregar-cepa",
                                "editar-cepa",
                                "eliminar-cepa",
                                "caract-cepa",
                                "ver-cepa"
                            ]
                        }
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
                        meta: { title: "Ver Cepa", permisos: ["ver-cepa"] }
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
                                meta: {
                                    title: "Características Macroscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-micro",
                                name: "caract-micro-cepa-bacteria",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-micro-cepa-bacteria" */

                                        "../components/cepas/bacterias/info-caract/InfoCaractMicroComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Microscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-bioqui",
                                name: "caract-bioqui-cepa-bacteria",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-bioqui-cepa-bacteria" */

                                        "../components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Bioquímicas",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-fisio",
                                name: "caract-fisio-cepa-bacteria",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-fisio-cepa-bacteria" */

                                        "../components/cepas/bacterias/info-caract/InfoCaractFisioComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Fisiológicas",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "identi-molecu",
                                name: "identi-molecu-cepa-bacteria",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "identi-molecu-cepa-bacteria" */

                                        "../components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue"
                                    ),
                                meta: {
                                    title: "Identificación Molecular",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "metodo-conser",
                                name: "metodo-conser-cepa-bacteria",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "metodo-conser-cepa-bacteria" */

                                        "../components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue"
                                    ),
                                meta: {
                                    title: "Métodos de Conservación",
                                    permisos: ["caract-cepa"]
                                }
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
                        meta: { title: "Ver Cepa", permisos: ["ver-cepa"] }
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
                                meta: {
                                    title: "Características Macroscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-micro",
                                name: "caract-micro-cepa-hongo",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-micro-cepa-hongo" */

                                        "../components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Microscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-bioqui",
                                name: "caract-bioqui-cepa-hongo",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-bioqui-cepa-hongo" */

                                        "../components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Bioquímicas",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "identi-molecu",
                                name: "identi-molecu-cepa-hongo",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "identi-molecu-cepa-hongo" */

                                        "../components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue"
                                    ),
                                meta: {
                                    title: "Identificación Molecular",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "metodo-conser",
                                name: "metodo-conser-cepa-hongo",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "metodo-conser-cepa-hongo" */

                                        "../components/cepas/hongos/info-caract/InfoMetodoConserComponent.vue"
                                    ),
                                meta: {
                                    title: "Métodos de Conservación",
                                    permisos: ["caract-cepa"]
                                }
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
                        meta: { title: "Ver Cepa", permisos: ["ver-cepa"] }
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
                                meta: {
                                    title: "Características Macroscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-micro",
                                name: "caract-micro-cepa-levadura",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-micro-cepa-levadura" */

                                        "../components/cepas/levaduras/info-caract/InfoCaractMicroComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Microscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-bioqui",
                                name: "caract-bioqui-cepa-levadura",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-bioqui-cepa-levadura" */

                                        "../components/cepas/levaduras/info-caract/InfoCaractBioquiComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Bioquímicas",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "identi-molecu",
                                name: "identi-molecu-cepa-levadura",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "identi-molecu-cepa-levadura" */

                                        "../components/cepas/levaduras/info-caract/InfoIdentiMolecuComponent.vue"
                                    ),
                                meta: {
                                    title: "Identificación Molecular",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "metodo-conser",
                                name: "metodo-conser-cepa-levadura",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "metodo-conser-cepa-levadura" */

                                        "../components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue"
                                    ),
                                meta: {
                                    title: "Métodos de Conservación",
                                    permisos: ["caract-cepa"]
                                }
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
                        meta: { title: "Ver Cepa", permisos: ["ver-cepa"] }
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
                                meta: {
                                    title: "Características Macroscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-micro",
                                name: "caract-micro-cepa-actinomiceto",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-micro-cepa-actinomiceto" */

                                        "../components/cepas/actinomicetos/info-caract/InfoCaractMicroComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Microscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "identi-bioqui",
                                name: "identi-bioqui-cepa-actinomiceto",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "identi-bioqui-cepa-actinomiceto" */

                                        "../components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue"
                                    ),
                                meta: {
                                    title: "Identificación Bioquímica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "otras-caract",
                                name: "otras-caract-cepa-actinomiceto",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "otras-caract-cepa-actinomiceto" */

                                        "../components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue"
                                    ),
                                meta: {
                                    title: "Otras Características",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-molecu",
                                name: "caract-molecu-cepa-actinomiceto",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-molecu-cepa-actinomiceto" */

                                        "../components/cepas/actinomicetos/info-caract/InfoCaractMolecuComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Moleculares",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "metodo-conser",
                                name: "metodo-conser-cepa-actinomiceto",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "metodo-conser-cepa-actinomiceto" */

                                        "../components/cepas/actinomicetos/info-caract/InfoMetodoConserComponent.vue"
                                    ),
                                meta: {
                                    title: "Métodos de Conservación",
                                    permisos: ["caract-cepa"]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    // ------------------------  BACTERIAS ------------------------------------------
    {
        path: "/bacterias",
        name: "",
        component: () =>
            import(
                /* webpackChunkName: "cepas-bacterias" */

                "../components/cepas/bacterias/CepasBacteriasComponent.vue"
            ),

        children: [
            {
                path: "",
                name: "",
                component: () =>
                    import(
                        /* webpackChunkName: "cepas-bacterias-container" */

                        "../components/cepas/ContainerRouterComponent.vue"
                    ),
                children: [
                    {
                        path: "",
                        name: "bacterias",
                        component: () =>
                            import(
                                /* webpackChunkName: "bacterias" */

                                "../components/cepas/ContainerFormTablaComponent.vue"
                            ),
                        meta: {
                            title: "Cepas Microbianas - Bacterias",
                            permisos: [
                                "agregar-cepa",
                                "editar-cepa",
                                "eliminar-cepa",
                                "caract-cepa",
                                "ver-cepa"
                            ]
                        }
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
                                meta: {
                                    title: "Características Macroscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-micro",
                                name: "caract-micro-bacteria",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-micro-bacteria" */

                                        "../components/cepas/bacterias/info-caract/InfoCaractMicroComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Microscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-bioqui",
                                name: "caract-bioqui-bacteria",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-bioqui-bacteria" */

                                        "../components/cepas/bacterias/info-caract/InfoCaractBioquiComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Bioquímicas",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-fisio",
                                name: "caract-fisio-bacteria",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-fisio-bacteria" */

                                        "../components/cepas/bacterias/info-caract/InfoCaractFisioComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Fisiológicas",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "identi-molecu",
                                name: "identi-molecu-bacteria",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "identi-molecu-bacteria" */

                                        "../components/cepas/bacterias/info-caract/InfoIdentiMolecuComponent.vue"
                                    ),
                                meta: {
                                    title: "Identificación Molecular",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "metodo-conser",
                                name: "metodo-conser-bacteria",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "metodo-conser-bacteria" */

                                        "../components/cepas/bacterias/info-caract/InfoMetodoConserComponent.vue"
                                    ),
                                meta: {
                                    title: "Métodos de Conservación",
                                    permisos: ["caract-cepa"]
                                }
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
                        meta: { title: "Ver Bacteria", permisos: ["ver-cepa"] }
                    }
                ]
            }
        ]
    },

    // ---------------------- HONGOS ------------------------------------------------
    {
        path: "/hongos",
        name: "",
        component: () =>
            import(
                /* webpackChunkName: "cepas-hongos" */

                "../components/cepas/hongos/CepasHongosComponent.vue"
            ),
        children: [
            {
                path: "",
                name: "",
                component: () =>
                    import(
                        /* webpackChunkName: "cepas-hongos-container" */

                        "../components/cepas/ContainerRouterComponent.vue"
                    ),
                children: [
                    {
                        path: "",
                        name: "hongos",
                        component: () =>
                            import(
                                /* webpackChunkName: "hongos" */

                                "../components/cepas/ContainerFormTablaComponent.vue"
                            ),
                        meta: {
                            title: "Cepas Microbianas - Hongos",
                            permisos: [
                                "agregar-cepa",
                                "editar-cepa",
                                "eliminar-cepa",
                                "caract-cepa",
                                "ver-cepa"
                            ]
                        }
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
                                meta: {
                                    title: "Características Macroscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-micro",
                                name: "caract-micro-hongo",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-micro-hongo" */

                                        "../components/cepas/hongos/info-caract/InfoCaractMicroComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Microscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-bioqui",
                                name: "caract-bioqui-hongo",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-bioqui-hongo" */

                                        "../components/cepas/hongos/info-caract/InfoCaractBioquiComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Bioquímicas",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "identi-molecu",
                                name: "identi-molecu-hongo",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "identi-molecu-hongo" */

                                        "../components/cepas/hongos/info-caract/InfoIdentiMolecuComponent.vue"
                                    ),
                                meta: {
                                    title: "Identificación Molecular",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "metodo-conser",
                                name: "metodo-conser-hongo",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "metodo-conser-hongo" */

                                        "../components/cepas/hongos/info-caract/InfoMetodoConserComponent.vue"
                                    ),
                                meta: {
                                    title: "Métodos de Conservación",
                                    permisos: ["caract-cepa"]
                                }
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
                        meta: { title: "Ver Hongo", permisos: ["ver-cepa"] }
                    }
                ]
            }
        ]
    },
    // ---------------------- LEVADURAS ------------------------------------------------
    {
        path: "/levaduras",
        name: "",
        component: () =>
            import(
                /* webpackChunkName: "cepas-levaduras" */

                "../components/cepas/levaduras/CepasLevadurasComponent.vue"
            ),
        children: [
            {
                path: "",
                name: "",
                component: () =>
                    import(
                        /* webpackChunkName: "cepas-levaduras-container" */

                        "../components/cepas/ContainerRouterComponent.vue"
                    ),
                children: [
                    {
                        path: "",
                        name: "levaduras",
                        component: () =>
                            import(
                                /* webpackChunkName: "levaduras" */

                                "../components/cepas/ContainerFormTablaComponent.vue"
                            ),
                        meta: {
                            title: "Cepas Microbianas - Levaduras",
                            permisos: [
                                "agregar-cepa",
                                "editar-cepa",
                                "eliminar-cepa",
                                "caract-cepa",
                                "ver-cepa"
                            ]
                        }
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
                                meta: {
                                    title: "Características Macroscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-micro",
                                name: "caract-micro-levadura",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-micro-levadura" */

                                        "../components/cepas/levaduras/info-caract/InfoCaractMicroComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Microscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-bioqui",
                                name: "caract-bioqui-levadura",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-bioqui-levadura" */

                                        "../components/cepas/levaduras/info-caract/InfoCaractBioquiComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Bioquímicas",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "identi-molecu",
                                name: "identi-molecu-levadura",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "identi-molecu-levadura" */

                                        "../components/cepas/levaduras/info-caract/InfoIdentiMolecuComponent.vue"
                                    ),
                                meta: {
                                    title: "Identificación Molecular",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "metodo-conser",
                                name: "metodo-conser-levadura",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "metodo-conser-levadura" */

                                        "../components/cepas/levaduras/info-caract/InfoMetodoConserComponent.vue"
                                    ),
                                meta: {
                                    title: "Métodos de Conservación",
                                    permisos: ["caract-cepa"]
                                }
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
                        meta: { title: "Ver Levadura", permisos: ["ver-cepa"] }
                    }
                ]
            }
        ]
    },
    // ---------------------- ACTINOMICETOS ------------------------------------------------
    {
        path: "/actinomicetos",
        name: "",
        component: () =>
            import(
                /* webpackChunkName: "cepas-actinomicetos" */

                "../components/cepas/actinomicetos/CepasActinomicetosComponent.vue"
            ),
        children: [
            {
                path: "",
                name: "",
                component: () =>
                    import(
                        /* webpackChunkName: "cepas-actinomicetos-container" */

                        "../components/cepas/ContainerRouterComponent.vue"
                    ),
                children: [
                    {
                        path: "",
                        name: "actinomicetos",
                        component: () =>
                            import(
                                /* webpackChunkName: "actinomicetos" */

                                "../components/cepas/ContainerFormTablaComponent.vue"
                            ),
                        meta: {
                            title: "Cepas Microbianas - Actinomicetos",
                            permisos: [
                                "agregar-cepa",
                                "editar-cepa",
                                "eliminar-cepa",
                                "caract-cepa",
                                "ver-cepa"
                            ]
                        }
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
                                meta: {
                                    title: "Características Macroscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-micro",
                                name: "caract-micro-actinomiceto",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-micro-actinomiceto" */

                                        "../components/cepas/actinomicetos/info-caract/InfoCaractMicroComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Microscópica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "identi-bioqui",
                                name: "identi-bioqui-actinomiceto",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "identi-bioqui-actinomiceto" */

                                        "../components/cepas/actinomicetos/info-caract/InfoIdentiBioquiComponent.vue"
                                    ),
                                meta: {
                                    title: "Identificación Bioquímica",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "otras-caract",
                                name: "otras-caract-actinomiceto",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "otras-caract-actinomiceto" */

                                        "../components/cepas/actinomicetos/info-caract/InfoOtrasCaractsComponent.vue"
                                    ),
                                meta: {
                                    title: "Otras Características",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "caract-molecu",
                                name: "caract-molecu-actinomiceto",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "caract-molecu-actinomiceto" */

                                        "../components/cepas/actinomicetos/info-caract/InfoCaractMolecuComponent.vue"
                                    ),
                                meta: {
                                    title: "Características Moleculares",
                                    permisos: ["caract-cepa"]
                                }
                            },
                            {
                                path: "metodo-conser",
                                name: "metodo-conser-actinomiceto",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "metodo-conser-actinomiceto" */

                                        "../components/cepas/actinomicetos/info-caract/InfoMetodoConserComponent.vue"
                                    ),
                                meta: {
                                    title: "Métodos de Conservación",
                                    permisos: ["caract-cepa"]
                                }
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
                        meta: {
                            title: "Ver Actinomiceto",
                            permisos: ["ver-cepa"]
                        }
                    }
                ]
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
                /* webpackChunkName: "usuarios" */

                "../components/gestionar_usuarios/UsuariosComponent.vue"
            ),
        children: [
            {
                path: "",
                name: "tabla-usuarios",
                component: () =>
                    import(
                        /* webpackChunkName: "tabla-usuarios" */

                        "../components/gestionar_usuarios/usuarios/ContainerComponent.vue"
                    ),
                meta: {
                    title: "Tabla Usuarios",
                    permisos: [
                        "agregar-usuario",
                        "editar-usuario",
                        "eliminar-usuario"
                    ]
                }
            },
            {
                path: "tabla-roles",
                name: "tabla-roles",
                component: () =>
                    import(
                        /* webpackChunkName: "tabla-roles" */

                        "../components/gestionar_usuarios/roles/ContainerComponent.vue"
                    ),
                meta: { title: "Tabla Roles", superAdmin: 1 }
            },
            {
                path: "tabla-seguimiento",
                name: "tabla-seguimiento",
                component: () =>
                    import(
                        /* webpackChunkName: "tabla-seguimiento" */

                        "../components/gestionar_usuarios/seguimiento/TablaComponent.vue"
                    ),
                meta: { title: "Tabla Seguimientos", superAdmin: 1 }
            }
        ]
    },
    // ------------------------------- OTRA INFORMACION ------------------------------------------
    {
        path: "/otra-info",
        name: "",
        component: () =>
            import(
                /* webpackChunkName: "otra-info" */

                "../components/otra-info/OtraInfoComponent.vue"
            ),
        children: [
            {
                path: "",
                name: "otra-info-cepas",
                component: () =>
                    import(
                        /* webpackChunkName: "tablas-cepas" */

                        "../components/otra-info/CepasComponent.vue"
                    ),
                meta: {
                    title: "Tablas Info Cepas",
                    permisos: ["agregar-otra", "editar-otra", "eliminar-otra"]
                }
            },
            {
                path: "bacterias",
                name: "otra-info-bacterias",
                component: () =>
                    import(
                        /* webpackChunkName: "otra-info-bacterias" */

                        "../components/otra-info/BacteriasComponent.vue"
                    ),
                meta: {
                    title: "Tablas Info Bacterias",
                    permisos: ["agregar-otra", "editar-otra", "eliminar-otra"]
                }
            },
            {
                path: "hongos",
                name: "otra-info-hongos",
                component: () =>
                    import(
                        /* webpackChunkName: "tablas-hongos" */

                        "../components/otra-info/HongosComponent.vue"
                    ),
                meta: {
                    title: "Tablas Info Hongos",
                    permisos: ["agregar-otra", "editar-otra", "eliminar-otra"]
                }
            },
            {
                path: "levaduras",
                name: "otra-info-levaduras",
                component: () =>
                    import(
                        /* webpackChunkName: "tablas-levaduras" */

                        "../components/otra-info/LevadurasComponent.vue"
                    ),
                meta: {
                    title: "Tablas Info Levaduras",
                    permisos: ["agregar-otra", "editar-otra", "eliminar-otra"]
                }
            },
            {
                path: "actinomicetos",
                name: "otra-info-actinomicetos",
                component: () =>
                    import(
                        /* webpackChunkName: "tablas-actinomicetos" */

                        "../components/otra-info/ActinomicetosComponent.vue"
                    ),
                meta: {
                    title: "Tablas Info Actinomicetos",
                    permisos: ["agregar-otra", "editar-otra", "eliminar-otra"]
                }
            }
        ]
    },
    // ------------------------------- QUIENES SOMOS ------------------------------------------
    {
        path: "/quienes-somos",
        name: "",
        component: () =>
            import(
                /* webpackChunkName: "quienes-somos" */

                "../components/sitio-web/QuienesSomosComponent.vue"
            ),
        children: [
            {
                path: "",
                name: "mision",
                component: () =>
                    import(
                        /* webpackChunkName: "mision" */

                        "../components/sitio-web/quienes-somos/MisionComponent.vue"
                    ),
                meta: { title: "Misión", permisos: ["editar-mision"] }
            },
            {
                path: "vision",
                name: "vision",
                component: () =>
                    import(
                        /* webpackChunkName: "vision" */

                        "../components/sitio-web/quienes-somos/VisionComponent.vue"
                    ),
                meta: { title: "Visión", permisos: ["editar-vision"] }
            },
            {
                path: "objetivos",
                name: "objetivos",
                component: () =>
                    import(
                        /* webpackChunkName: "objetivos" */

                        "../components/sitio-web/quienes-somos/ObjetivosComponent.vue"
                    ),
                meta: { title: "Objetivos", permisos: ["editar-objetivos"] }
            }
        ]
    },

    // ------------------------------- DOCUMENTOS ------------------------------------------
    {
        path: "/documentos",
        name: "",
        component: () =>
            import(
                /* webpackChunkName: "documentos" */

                "../components/sitio-web/DocumentosComponent.vue"
            ),
        children: [
            {
                path: "",
                name: "proyectos",
                component: () =>
                    import(
                        /* webpackChunkName: "proyectos" */

                        "../components/sitio-web/documentos/proyectos/ContainerComponent.vue"
                    ),
                meta: {
                    title: "Proyectos",
                    permisos: [
                        "agregar-proyecto",
                        "editar-proyecto",
                        "eliminar-proyecto"
                    ]
                }
            },
            {
                path: "publicaciones",
                name: "publicaciones",
                component: () =>
                    import(
                        /* webpackChunkName: "publicaciones" */

                        "../components/sitio-web/documentos/publicaciones/ContainerComponent.vue"
                    ),
                meta: {
                    title: "Publicaciones",
                    permisos: [
                        "agregar-publicacion",
                        "editar-publicacion",
                        "eliminar-publicacion"
                    ]
                }
            }
        ]
    },

    // ------------------------------- PUBLICIDAD ------------------------------------------
    {
        path: "/publicidad",
        name: "",
        component: () =>
            import(
                /* webpackChunkName: "publicidad" */

                "../components/sitio-web/PublicidadComponent.vue"
            ),
        children: [
            {
                path: "",
                name: "noticias",
                component: () =>
                    import(
                        /* webpackChunkName: "noticias" */

                        "../components/sitio-web/publicidad/noticias/ContainerComponent.vue"
                    ),
                meta: {
                    title: "Noticias",
                    permisos: [
                        "agregar-noticia",
                        "editar-noticia",
                        "eliminar-noticia"
                    ]
                }
            },
            {
                path: "actividades",
                name: "actividades",
                component: () =>
                    import(
                        /* webpackChunkName: "actividades" */

                        "../components/sitio-web/publicidad/actividades/ContainerComponent.vue"
                    ),
                meta: {
                    title: "Actividades",
                    permisos: [
                        "agregar-actividad",
                        "editar-actividad",
                        "eliminar-actividad"
                    ]
                }
            },
            {
                path: "novedades",
                name: "novedades",
                component: () =>
                    import(
                        /* webpackChunkName: "novedades" */

                        "../components/sitio-web/publicidad/novedades/ContainerComponent.vue"
                    ),
                meta: {
                    title: "Novedades",
                    permisos: [
                        "agregar-novedad",
                        "editar-novedad",
                        "eliminar-novedad"
                    ]
                }
            }
        ]
    },
    {
        path: "/perfil",
        name: "perfil",
        component: () =>
            import(
                /* webpackChunkName: "perfil" */

                "../components/PerfilComponent.vue"
            ),
        meta: { title: "Perfil" }
    },
    {
        path: "/calendario",
        name: "calendario",
        component: () =>
            import(
                /* webpackChunkName: "calendario" */

                "../components/CalendarioComponent.vue"
            ),
        meta: { title: "Calendario" }
    },
    {
        path: "/imagenes-login/ver",
        name: "imagenes-login",
        component: () =>
            import(
                /* webpackChunkName: "imagenes-login" */

                "../components/imagenes-login/ImagenesLoginComponent.vue"
            ),
        meta: { title: "Imagenes Login", permisos: ["editar-imglogin"] }
    },
    {
        path: "/investigadores",
        name: "investigadores",
        component: () =>
            import(
                /* webpackChunkName: "investigadores" */

                "../components/sitio-web/InvestigadoresComponent.vue"
            ),
        meta: {
            title: "Investigadores",
            permisos: [
                "agregar-investigador",
                "editar-investigador",
                "eliminar-investigador"
            ]
        }
    },
    {
        path: "/equipamientos",
        name: "equipamientos",
        component: () =>
            import(
                /* webpackChunkName: "equipamientos" */

                "../components/sitio-web/EquipamientosComponent.vue"
            ),
        meta: {
            title: "Equipamientos",
            permisos: [
                "agregar-equipamiento",
                "editar-equipamiento",
                "eliminar-equipamiento"
            ]
        }
    },
    {
        path: "/sin-acceso",
        name: "sin-acceso",
        component: () =>
            import(
                /* webpackChunkName: "error-403" */

                "../components/errores/Error403Component.vue"
            ),
        meta: { title: "Sin Accesso" }
    },
    {
        path: "*",
        name: "",
        component: () =>
            import(
                /* webpackChunkName: "error-404" */

                "../components/errores/Error404Component.vue"
            ),
        meta: { title: "Esta Pagina No existe" }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if (to.matched.some(record => record.meta.permisos)) {
        if (store.getters.getPermisoByNombres(to.meta.permisos)) {
            return next();
        } else {
            return next("/sin-acceso");
        }
    } else if (to.matched.some(record => record.meta.superAdmin)) {
        if (store._modules.root.state.auth.rol_id === to.meta.superAdmin) {
            return next();
        } else {
            return next("/sin-acceso");
        }
    }
    return next();
});

export default router;
