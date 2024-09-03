import axios from "axios";

export  default {
    data(){
        return{
        }
    },
    methods : {
        openModal : function (modalId = 'myModal', formData ={}){
            const _this = this;
            $(`#${modalId}`).modal('show');
            _this.$store.commit('formData', {});
        },
        closeModal : function (modalId = 'myModal', formData = {}){
            const _this = this;
            $(`#${modalId}`).modal('hide');
            _this.$store.commit('formData', {});
        },
        urlGenerate : function (customUrl = false){
            const _this = this;
            if (customUrl){
                return `${baseUrl}/${customUrl}`;
            }
            return `${baseUrl}/${_this.$route.meta.dataUrl}`;
        }
    },
    computed : {
        formData(){
            return this.$store.state.formData;
        },
        dataList(){
            return this.$store.state.dataList;
        }
    }
}
