import { device } from "./hooks/index";

async function init() {
  const initDevice = await device({
    address: "192.168.50.179",
    token: "05269350f38ae0ceb0cfa4d2721beaaa",
  });

  console.log("initDevice", initDevice);
}
init();
