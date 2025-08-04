import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getInstruments, getInstrumentById, createInstrument, deleteInstrument, 
    updateInstrument, getAllInstruments } from "../controller/instruments.controller.js";

    import {validateSchema} from "../middlewares/validaator.middlewares.js";
    import {instrumentSchema} from "../schemas/instruments.Schema.js";
const router = Router();

router.get("/instruments", authRequired, getInstruments);
router.get("/instruments/:id", authRequired, getInstrumentById);
router.post("/instruments", authRequired, validateSchema(instrumentSchema),createInstrument);
router.delete("/instruments/:id", authRequired, deleteInstrument);
router.put("/instruments/:id", authRequired, updateInstrument);
router.get("/catalog"  ,getAllInstruments);


export default router;