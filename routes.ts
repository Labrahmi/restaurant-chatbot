import { Router } from "./deps.ts";
import { handleReservation } from "./controllers/reservationController.ts";
import { handleMenu } from "./controllers/menuController.ts";
import { handleOrder } from "./controllers/orderController.ts";

const router = new Router();

router.get("/menu", handleMenu);
// .post("/reservation", handleReservation)
// .post("/order", handleOrder);

export { router };
