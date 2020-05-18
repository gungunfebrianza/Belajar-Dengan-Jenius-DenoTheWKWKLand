import { indexController } from "../controllers/index.controller.ts";
import { router } from "../helpers/routers.ts";

export async function indexRoute(): Promise<void> {
  await router.get("/", indexController.viewController);
  await router.post("/", indexController.fetchController);
}
