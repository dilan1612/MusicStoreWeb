import axios from './axios';

export const getInstrumentsRequest = () => axios.get("/instruments");

export const getInstrumentRequest = (id) => axios.get(`/instruments/${id}`);

export const createInstrumentRequest = (instrument) => axios.post("/instruments", instrument);

export const updateInstrumentRequest = (id, instrument) => axios.put(`/instruments/${id}`, instrument);

export const deleteInstrumentRequest = (id) => axios.delete(`/instruments/${id}`);

export const getCatalogRequest = () => axios.get("/catalog");