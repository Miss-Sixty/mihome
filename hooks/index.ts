import connectToDevice from "./connectToDevice";

/**
 * 从给定的选项中解析设备
 *
 * Options:
 * * `address` 作为 IP 或主机名的设备地址
 * * `token`, 设备的token
 */
export const device = connectToDevice;
