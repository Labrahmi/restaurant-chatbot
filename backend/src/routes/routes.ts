import { Router } from "@deps";
import { handleReservation } from "../controllers/reservationController.ts";
import { handleMenu } from "../controllers/menuController.ts";
import { handleOrder } from "../controllers/orderController.ts";
import { handleChat } from "../controllers/chatController.ts";

const router = new Router();

router.get("/menu", handleMenu);

router.post("/chat", handleChat); // <<<<<<<<<

router.post("/reservation", handleReservation);
router.post("/order", handleOrder);

export { router };
