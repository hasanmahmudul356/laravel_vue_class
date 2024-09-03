<template>
    <div class="container-fluid px-4">
        <page-top></page-top>
        <data-table :tableHeading="tableHeading">
            <tr v-for="(data, index) in dataList">
                <td>{{ index+1 }}</td>
                <td>{{ data.name }}</td>
                <td>Categry</td>
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
        <form-modal>
            <div class="row">
                <div class="col-md-12">
                    <label>SubCategory Name</label>
                    <input v-model="formData.name" class="form-control" type="text">
                </div>
                <div class="col-md-12">
                    <label>Category</label>
                    <select v-model="formData.category_id" class="form-control">
                        <option>Select</option>
                        <option></option>
                    </select>
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
    name: "subCategoryComponent",
    components: {FormModal, DataTable, PageTop},
    data(){
        return {
            tableHeading : ['Sl', 'name','Category', 'Action']
        }
    },
    mounted() {
        this.getDataList();
    }
}
</script>

<style scoped>

</style>
