const toastr = {
    methods: {
        toastr(titulo, msg, tipo) {
            this.$toastr.Add({
                title: titulo,
                msg: msg,
                position: "toast-top-right",
                type: tipo,
                timeout: 5000,
                progressbar: true,
                //progressBarValue:"", // if you want set progressbar value
                style: {},
                classNames: ["animated", "zoomInUp"],
                closeOnHover: true,
                clickClose: true,
                onCreated: () => {},
                onClicked: () => {},
                onClosed: () => {},
                onMouseOver: () => {},
                onMouseOut: () => {}
            });
        }
    }
};

export default toastr;
