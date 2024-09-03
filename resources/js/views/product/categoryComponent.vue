<template>
    <div class="container-fluid px-4">
        <page-top></page-top>
        <data-table :tableHeading="tableHeading">
            <tr v-for="(data, index) in dataList">
                <td>{{ index+1 }}</td>
                <td>{{ data.name }}</td>
                <td>
                    <a class="btn btn-outline-warning">
                        <i class="fa fa-pencil"></i>
                    </a>
                    <a class="btn btn-outline-danger">
                        <i class="fa fa-trash"></i>
                    </a>
                </td>
            </tr>
        </data-table>
        <form-modal @submit="submitForm()">
            <div class="row">
                <div class="col-md-12">
                    <label>Category Name</label>
                    <input v-validate="'required'" v-model="formData.name" name="name" class="form-control" type="text">
                    <span>{{ errors.first('name') }}</span>
                </div>
            </div>
        </form-modal>
    </div>
</template>

<script>
import PageTop from "../../components/pageTop.vue";
import DataTable from "../../components/dataTable.vue";
import axios from "axios";
import FormModal from "../../components/formModal.vue";

export default {
    name: "categoryComponent",
    components: {FormModal, DataTable, PageTop},
    data(){
        return {
            tableHeading : ['Sl', 'name', 'Action'],
        }
    },
    mounted() {
        this.getDataList();
        this.$set(this.formData, 'name', '');
    }
}
</script>

<style scoped>
.datatable-top {
    padding: 0 !important;
}
</style>
