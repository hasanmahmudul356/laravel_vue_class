import axios from "axios";

export  default {
    data(){
        return{
            dataList : {},
            formData : {}
        }
    },
    methods : {
        getDataList : function (){
            const _this = this;
            axios.get(`${baseUrl}/${this.$route.meta.dataUrl}`)
                .then(function (response){
                    _this.dataList = response.data.result;
                });
        },
        submitForm : function (formData = {}){
            const _this = this;
            const URl = `${baseUrl}/${this.$route.meta.dataUrl}`;
            axios.post(URl, formData)
                .then(function (response){
                    _this.dataList = response.data.result;
                });
        }
    }
}
