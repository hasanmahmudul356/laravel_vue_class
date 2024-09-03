export const store = {
    state: {
        dataList: {},
        formData: {},
    },
    getter: {
        dataList(state) {
            return state.dataList;
        },
        formData(state) {
            return state.formData;
        }
    },
    mutations: {
        dataList(state, data) {
            state.dataList = data;
        },
        formData(state, data) {
            state.formData = data;
        }
    },
    actions : {

    }
}

