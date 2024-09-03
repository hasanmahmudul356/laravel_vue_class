import axios from "axios";
import {Validator} from "vee-validate";

export  default {
    data(){
        return{
        }
    },
    methods : {
        getDataList : function (){
            const _this = this;
            axios.get(_this.urlGenerate())
                .then(function (response){
                    _this.$store.commit('dataList', response.data.result);
                });
        },
        submitForm : function (formData = {}, optParms = {}, callback ){
            const _this = this;
            _this.$validator.validateAll().then(valid => {
                if (valid) {
                    axios.post(_this.urlGenerate(), formData)
                        .then(function (res){
                            if (parseInt(res.data.status) === 2000){
                                if (optParms.modalForm === undefined ){
                                    _this.closeModal();
                                }
                                if (optParms.reloadList === undefined){
                                    _this.getDataList();
                                }
                                if (typeof callback === 'function'){
                                    callback(res.data.result);
                                }
                            }else if(parseInt(res.data.status) === 3000){
                                console.log(res.data.result);
                            }else{
                                console.log('toster');
                            }
                        });
                }
            });
        }
    }
}
