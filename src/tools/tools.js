export const initFutureDate = () => {
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 2);

    return futureDate;
}