<template>
    <div class="modal" :id="modalId">
        <div class="modal-dialog">
            <form @submit.prevent="submitForm(formData)">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Modal Heading</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success">Submit</button>
                    <button type="button" class="btn btn-danger" >Close</button>
                </div>

            </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "formModal",
    props :{
        modalId : {
            type : [String],
            default : 'myModal'
        },
        formData : {
            type : [Object, Array],
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>

</style>
