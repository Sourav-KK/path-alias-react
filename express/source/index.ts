import express from "express";
import "module-alias/register";
import adminRoute from "@routes/Admin/adminRoute";
import userRouter from "@routes/User/userRoute";

const app = express();

const PORT_NO: number = 3000;

app.use("/", userRouter);
app.use("/admin", adminRoute);

app.listen(PORT_NO, () => {
  console.log(`Server started on ${PORT_NO}`);
});

export default app;
