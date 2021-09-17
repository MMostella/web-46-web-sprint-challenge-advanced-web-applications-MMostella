import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    axiosWithAuth()
        .get('/colors')
}

export default fetchColorService;