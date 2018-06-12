export const approximateError = (x0, x1) => {
    return 100 * (Math.abs((x1-x0)/x1));
};